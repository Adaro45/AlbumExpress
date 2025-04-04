import axios from "axios"

// Crear una instancia de axios con configuración base
export const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

// Añadir token a las solicitudes si está disponible
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Token ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// Interceptor para manejar errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message)
    return Promise.reject(error)
  },
)

// API para productos (cliente)
export const clientProductApi = {
  getAll: (params = {}) => api.get("/api/products/", { params }),
  getById: (id) => api.get(`/api/products/${id}/`),
  getFeatured: () => api.get("/api/products/featured/"),
  getByCategory: (category) => api.get(`/api/products/category/${category}/`),
  getHomepage: () => api.get("/api/products/homepage/"),
  getLanding: () => api.get("/api/products/landing/"),
}

// API para categorías (cliente)
export const clientCategoryApi = {
  getAll: () => api.get("/api/categories/"),
}

// API para productos (admin)
export const productApi = {
  getAll: (params = {}) => api.get("/api/products/", { params }),
  getById: (slug) => api.get(`/api/products/${slug}/`),
  create: (data) =>
    api.post("/api/products/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  update: (slug, data) =>
    api.put(`/api/products/${slug}/`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  delete: (slug) => api.delete(`/api/products/${slug}/`),
  toggleFeatured: (slug) => api.post(`/api/products/${slug}/toggle_featured/`),
  toggleHomepage: (slug) => api.post(`/api/products/${slug}/toggle_homepage/`),
  toggleLanding: (slug) => api.post(`/api/products/${slug}/toggle_landing/`),
  getFeatured: () => api.get("/api/products/featured/"),
  getHomepage: () => api.get("/api/products/homepage/"),
  getLanding: () => api.get("/api/products/landing/"),
}

// API para categorías (admin)
export const categoryApi = {
  getAll: () => api.get("/api/categories/"),
  getById: (slug) => api.get(`/api/categories/${slug}/`),
  create: (data) => api.post("/api/categories/", data),
  update: (slug, data) => api.put(`/api/categories/${slug}/`, data),
  delete: (slug) => api.delete(`/api/categories/${slug}/`),
}

