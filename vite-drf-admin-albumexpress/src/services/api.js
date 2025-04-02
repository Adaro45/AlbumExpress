import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

// Add token to requests if available
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

// Product API
export const productApi = {
  getAll: () => api.get("/api/products/"),
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

// Category API
export const categoryApi = {
  getAll: () => api.get("/api/categories/"),
  getById: (slug) => api.get(`/api/categories/${slug}/`),
  create: (data) => api.post("/api/categories/", data),
  update: (slug, data) => api.put(`/api/categories/${slug}/`, data),
  delete: (slug) => api.delete(`/api/categories/${slug}/`),
}

