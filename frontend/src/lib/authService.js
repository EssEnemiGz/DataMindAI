import api from './api';

export const authService = {
  async login(email, password) {
    try {
      const response = await api.post('/api/v1/login', {
        email: email,
        password: password,
      });
      
      if (response.data.session_id) {
        localStorage.setItem('sessionId', response.data.session_id);
        localStorage.setItem('userId', response.data.user_id);
      }
      
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

  logout() {
    localStorage.removeItem('sessionId');
    localStorage.removeItem('userId');
    localStorage.removeItem('authToken');
  },

  isAuthenticated() {
    return !!localStorage.getItem('sessionId');
  },

  getCurrentUser() {
    const userId = localStorage.getItem('userId');
    const sessionId = localStorage.getItem('sessionId');
    return userId && sessionId ? { userId, sessionId } : null;
  }
}; 