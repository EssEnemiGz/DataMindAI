import api from './api';

export const authService = {
  async login(email, password) {
    try {
      const response = await api.post('/api/v1/login', {
        email: email,
        password: password,
      });
      
      return response.data;
    } catch (error) {
      console.error('Login error details:', error);
      if (error.response?.data) {
        throw error.response.data;
      } else if (error.message) {
        throw { message: error.message };
      } else {
        throw { message: 'An unknown error occurred' };
      }
    }
  },

  async register(username, email, password) {
    try {
      const response = await api.post('/api/v1/register', {
        username: username,
        email: email,
        password: password,
      });
      
      return response.data;
    } catch (error) {
      console.error('Register error details:', error);
      if (error.response?.data) {
        throw error.response.data;
      } else if (error.message) {
        throw { message: error.message };
      } else {
        throw { message: 'An unknown error occurred' };
      }
    }
  },

  async logout() {
    try {
      await api.post('/api/v1/logout');
    } catch (error) {
      console.error('Logout error:', error);
    }
  },

  async getCurrentUser() {
    try {
      console.log('🔍 Calling /api/v1/me...');
      const response = await api.get('/api/v1/me');
      console.log('✅ /api/v1/me response:', response.data);
      return response.data;
    } catch (error) {
      console.log('❌ /api/v1/me error:', error.response?.status, error.response?.data);
      return null;
    }
  },

  async isAuthenticated() {
    try {
      const user = await this.getCurrentUser();
      return !!user;
    } catch (error) {
      return false;
    }
  }
}; 