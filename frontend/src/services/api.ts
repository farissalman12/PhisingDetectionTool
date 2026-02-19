import axios from 'axios';



export interface Scan {
  id: string;
  url: string;
  riskScore: number;
  status: string;
  createdAt: string;
}

export interface User {
  userId: string;
  email: string;
  role: string;
}

// Backend interface to type the raw response
interface BackendScan {
  id: string;
  input_content: string;
  risk_score: number;
  verdict: string;
  created_at: string;
  detailed_report: any;
}

// 1. Get Base URL from Environment
let baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// 2. Render Blueprint Fix: If "host" property is used, it might lack protocol.
if (baseURL && !baseURL.startsWith('http')) {
  baseURL = `https://${baseURL}`;
}

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to attach the Token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const mapToFrontend = (data: BackendScan): Scan => ({
  id: data.id,
  url: data.input_content,
  riskScore: data.risk_score,
  status: data.verdict,
  createdAt: data.created_at,
});

export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    if (response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
    }
    return response.data;
  },
  register: async (email: string, password: string) => {
    return api.post('/auth/register', { email, password });
  },
  logout: () => {
    localStorage.removeItem('token');
  },
};

export const scanService = {
  analyzeUrl: async (url: string) => {
    const response = await api.post<BackendScan>('/scan', { url });
    return mapToFrontend(response.data);
  },
  getScan: async (id: string) => {
    const response = await api.get<BackendScan>(`/scan/${id}`);
    return mapToFrontend(response.data);
  },
  getRecentScans: async (limit: number = 10, offset: number = 0) => {
    const response = await api.get<BackendScan[]>(`/scan?limit=${limit}&offset=${offset}`);
    return response.data.map(mapToFrontend);
  },
};
