const API_URL = 'http://localhost:8080/api/auth';
export const authService = {


async login(username, password) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }
    
    // Save user data to sessionStorage
    sessionStorage.setItem('user', JSON.stringify(data));
    return data;    
  } catch (error) {
    console.error('Login error:', error);    // Show error in UI
    document.getElementById('error-message').textContent = error.message;
    throw error;
  }
},

logout() {
  sessionStorage.removeItem('user');
},
getCurrentUser() {
  const user = sessionStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}
};