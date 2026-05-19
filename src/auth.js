export const getStoredUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const getToken = () => localStorage.getItem('token');

export const authHeaders = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const clearSession = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};
