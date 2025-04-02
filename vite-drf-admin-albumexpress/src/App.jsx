"use client"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import ProductList from "./pages/ProductList"
import ProductForm from "./pages/ProductForm"
import CategoryList from "./pages/CategoryList"
import CategoryForm from "./pages/CategoryForm"
import Login from "./pages/Login"
import { AuthProvider, useAuth } from "./context/AuthContext"
import "./App.css"

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
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
    </AuthProvider>
  )
}

export default App

