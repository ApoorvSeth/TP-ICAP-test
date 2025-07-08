const API_URL = 'http://localhost:4000';

export async function login(username: string, password: string) {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error('Invalid credentials');

  const data = await res.json();
  localStorage.setItem('token', data.token); // store JWT token
}

export function logout() {
  localStorage.removeItem('token');
}

export async function getProfile() {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token');

  const res = await fetch(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error('Not authenticated');
  return res.json();
}

export function isLoggedIn(): boolean {
  return !!localStorage.getItem('token');
}
