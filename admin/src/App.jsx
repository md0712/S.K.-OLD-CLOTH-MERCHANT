import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { api } from './services/api';

// Admin Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Enquiries from './pages/Enquiries';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Gallery from './pages/Gallery';
import WebsiteContent from './pages/WebsiteContent';
import SEOSettings from './pages/SEOSettings';
import Settings from './pages/Settings';

function ProtectedLayout({ children, title }) {
  const isAuth = api.isAuthenticated();
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title={title} />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedLayout title="Executive Overview">
            <Dashboard />
          </ProtectedLayout>
        }
      />
      <Route
        path="/enquiries"
        element={
          <ProtectedLayout title="Customer Inquiries">
            <Enquiries />
          </ProtectedLayout>
        }
      />
      <Route
        path="/products"
        element={
          <ProtectedLayout title="Product Catalog">
            <Products />
          </ProtectedLayout>
        }
      />
      <Route
        path="/categories"
        element={
          <ProtectedLayout title="Categories">
            <Categories />
          </ProtectedLayout>
        }
      />
      <Route
        path="/gallery"
        element={
          <ProtectedLayout title="Stock Photographs">
            <Gallery />
          </ProtectedLayout>
        }
      />
      <Route
        path="/content"
        element={
          <ProtectedLayout title="Website CMS Content">
            <WebsiteContent />
          </ProtectedLayout>
        }
      />
      <Route
        path="/seo"
        element={
          <ProtectedLayout title="Search Engine Optimization">
            <SEOSettings />
          </ProtectedLayout>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedLayout title="System Preferences">
            <Settings />
          </ProtectedLayout>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
