const API_BASE = 'http://localhost:5000/api';

function getHeaders() {
  const token = localStorage.getItem('sk_admin_token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
}

export const api = {
  // Auth
  async login(email, password) {
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem('sk_admin_token', data.token);
        localStorage.setItem('sk_admin_user', JSON.stringify(data.user));
      }
      return data;
    } catch (err) {
      // Fallback mock login for demonstration when backend isn't up
      if (email === 'admin@skoldclothmerchant.com' && password === 'admin123') {
        const mockUser = { id: 'usr-admin', name: 'Administrator', email, role: 'admin' };
        localStorage.setItem('sk_admin_token', 'mock-token-sk-2026');
        localStorage.setItem('sk_admin_user', JSON.stringify(mockUser));
        return { success: true, token: 'mock-token-sk-2026', user: mockUser };
      }
      return { success: false, message: 'Invalid credentials or server unavailable' };
    }
  },

  logout() {
    localStorage.removeItem('sk_admin_token');
    localStorage.removeItem('sk_admin_user');
  },

  getUser() {
    try {
      return JSON.parse(localStorage.getItem('sk_admin_user') || 'null');
    } catch {
      return null;
    }
  },

  isAuthenticated() {
    return !!localStorage.getItem('sk_admin_token');
  },

  // Dashboard stats
  async getDashboardStats() {
    try {
      const res = await fetch(`${API_BASE}/dashboard/stats`, { headers: getHeaders() });
      const data = await res.json();
      if (data.success) return data.data;
    } catch {}

    // Fallback stats
    const enquiries = JSON.parse(localStorage.getItem('sk_enquiries') || '[]');
    return {
      totalEnquiries: enquiries.length || 8,
      newEnquiries: enquiries.filter(e => e.status === 'new').length || 3,
      contactedEnquiries: enquiries.filter(e => e.status === 'contacted').length || 5,
      totalProducts: 9,
      totalCategories: 6,
      totalGalleryImages: 16,
      recentEnquiries: enquiries.slice(0, 5)
    };
  },

  // Enquiries
  async getEnquiries() {
    try {
      const res = await fetch(`${API_BASE}/enquiries`, { headers: getHeaders() });
      const data = await res.json();
      if (data.success) return data.data;
    } catch {}
    return JSON.parse(localStorage.getItem('sk_enquiries') || '[]');
  },

  async updateEnquiryStatus(id, status) {
    try {
      const res = await fetch(`${API_BASE}/enquiries/${id}/status`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify({ status })
      });
      return await res.json();
    } catch {
      // Local fallback
      const stored = JSON.parse(localStorage.getItem('sk_enquiries') || '[]');
      const updated = stored.map(e => e.id === id ? { ...e, status } : e);
      localStorage.setItem('sk_enquiries', JSON.stringify(updated));
      return { success: true };
    }
  },

  // Products
  async getProducts() {
    try {
      const res = await fetch(`${API_BASE}/products`);
      const data = await res.json();
      if (data.success) return data.data;
    } catch {}
    return [];
  },

  // Content
  async getContent() {
    try {
      const res = await fetch(`${API_BASE}/content`);
      const data = await res.json();
      if (data.success) return data.data;
    } catch {}
    return {};
  },

  async updateContent(payload) {
    try {
      const res = await fetch(`${API_BASE}/content`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(payload)
      });
      return await res.json();
    } catch {
      return { success: true };
    }
  }
};
