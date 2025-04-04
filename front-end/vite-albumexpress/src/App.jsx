"use client"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from "react-hot-toast"

// Cliente
import ClientLayout from "./client/components/Layout"
import HomePage from "./client/pages/HomePage"
import ProductsPage from "./client/pages/ProductsPage"
import AboutPage from "./client/pages/AboutPage"
import ContactPage from "./client/pages/ContactPage"
import ProductDetailPage from "./client/pages/ProductDetailPage"
import CartPage from "./client/pages/CartPage"
import CheckoutPage from "./client/pages/CheckoutPage"
import { CartProvider } from "./client/context/CartContext"

// Admin
import AdminLayout from "./admin/components/Layout"
import Dashboard from "./admin/pages/Dashboard"
import ProductList from "./admin/pages/ProductList"
import ProductForm from "./admin/pages/ProductForm"
import CategoryList from "./admin/pages/CategoryList"
import CategoryForm from "./admin/pages/CategoryForm"
import Login from "./admin/pages/Login"
import { AuthProvider, useAuth } from "./admin/context/AuthContext"

import "./App.css"

// Componente para proteger rutas de administración
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }

  return <>{children}</>
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Toaster position="top-right" />
          <Routes>
            {/* Rutas de cliente */}
            <Route path="/" element={<ClientLayout />}>
              <Route index element={<HomePage />} />
              <Route path="productos" element={<ProductsPage />} />
              <Route path="productos/:id" element={<ProductDetailPage />} />
              <Route path="nosotros" element={<AboutPage />} />
              <Route path="contacto" element={<ContactPage />} />
              <Route path="carrito" element={<CartPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
            </Route>

            {/* Rutas de administración */}
            <Route path="/admin/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="products" element={<ProductList />} />
              <Route path="products/new" element={<ProductForm />} />
              <Route path="products/:slug" element={<ProductForm />} />
              <Route path="categories" element={<CategoryList />} />
              <Route path="categories/new" element={<CategoryForm />} />
              <Route path="categories/:slug" element={<CategoryForm />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App

