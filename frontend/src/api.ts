const BASE_URL = 'http://localhost:3000';

export const api = {
  async request(endpoint: string, options: RequestInit = {}) {
    const token = localStorage.getItem('access_token');
    
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}), 
      ...options.headers,
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Something went wrong' }));
  
        const message = Array.isArray(errorData.message) 
        ? errorData.message.join(', ') 
        : errorData.message || 'An unexpected error occurred';

        throw new Error(message);
    }

    if (response.status === 204 || (response.status === 200 && !response.headers.get('content-type')?.includes('application/json'))) {
      return null;
    }
    
    return response.json();
  }
};