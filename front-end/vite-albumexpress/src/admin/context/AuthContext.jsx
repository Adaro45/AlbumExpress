"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"
import toast from "react-hot-toast"

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  login: async () => {},
  logout: () => {},
  loading: true,
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token")

      if (token) {
        try {
          // Set default auth header
          api.defaults.headers.common["Authorization"] = `Token ${token}`

          // Get user info
          try {
            const response = await api.get("/api-auth/user/")
            setUser(response.data)
            setIsAuthenticated(true)
          } catch (userError) {
            console.error("Error obteniendo información del usuario:", userError)
            // Si no podemos obtener la información del usuario pero tenemos token,
            // asumimos que el usuario está autenticado con información básica
            setUser({ username: "Admin" })
            setIsAuthenticated(true)
          }
        } catch (error) {
          console.error("Authentication error:", error)
          localStorage.removeItem("token")
          delete api.defaults.headers.common["Authorization"]
        }
      }

      setLoading(false)
    }

    checkAuth()
  }, [])

  const login = async (username, password) => {
    try {
      setLoading(true)

      // Intenta usar el endpoint alternativo para obtener el token
      const response = await api.post("/api-token-auth/", { username, password })

      // Si el endpoint alternativo funciona, el token estará en response.data.token
      const token = response.data.token

      if (token) {
        // Guarda el token
        localStorage.setItem("token", token)

        // Configura el encabezado de autorización
        api.defaults.headers.common["Authorization"] = `Token ${token}`

        // Obtén la información del usuario
        try {
          const userResponse = await api.get("/api-auth/user/")
          setUser(userResponse.data)
          setIsAuthenticated(true)
          setLoading(false)
          return
        } catch (userError) {
          console.error("Error obteniendo información del usuario:", userError)
          // Si no podemos obtener la información del usuario, creamos un usuario básico
          setUser({ username })
          setIsAuthenticated(true)
          setLoading(false)
          return
        }
      }

      // Si llegamos aquí, intentamos con el endpoint original
      const originalResponse = await api.post("/api-auth/login/", { username, password })
      const { key } = originalResponse.data

      // Guarda el token
      localStorage.setItem("token", key)

      // Configura el encabezado de autorización
      api.defaults.headers.common["Authorization"] = `Token ${key}`

      // Obtén la información del usuario
      const userResponse = await api.get("/api-auth/user/")
      setUser(userResponse.data)
      setIsAuthenticated(true)
      setLoading(false)
    } catch (error) {
      console.error("Login error:", error)
      toast.error("Error de inicio de sesión. Verifica tus credenciales.")
      setLoading(false)
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    delete api.defaults.headers.common["Authorization"]
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading }}>{children}</AuthContext.Provider>
  )
}

