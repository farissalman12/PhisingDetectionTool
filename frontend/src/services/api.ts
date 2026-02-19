import axios from 'axios';



export interface RuleResult {
  ruleName: string;
  score: number;
  details: string;
}

export interface Scan {
  id: string;
  url: string;
  riskScore: number;
  heuristicScore: number;
  reputationScore: number;
  aiScore: number;
  aiExplanation?: string;
  virusTotal?: {
    malicious: number;
    suspicious: number;
    harmless: number;
    undetected: number;
    total: number;
    permalink?: string;
  };
  rules: RuleResult[];
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
  heuristicScore?: number;
  reputationScore?: number;
  aiScore?: number;
  aiExplanation?: string;
  virusTotal?: {
    malicious: number;
    suspicious: number;
    harmless: number;
    undetected: number;
    total: number;
    permalink?: string;
  };
  rules?: RuleResult[];
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

const mapToFrontend = (data: BackendScan): Scan => {
  // Parsing detailed_report if it's a string (SQLite storage) or using top-level props
  const detailed = typeof data.detailed_report === 'string' 
    ? JSON.parse(data.detailed_report) 
    : data.detailed_report || {};

  return {
    id: data.id,
    url: data.input_content,
    riskScore: data.risk_score,
    // Prefer top-level properties (fresh scan), fallback to detailed_report (historical)
    heuristicScore: data.heuristicScore ?? detailed.heuristicScore ?? 0,
    reputationScore: data.reputationScore ?? detailed.reputationScore ?? 0,
    aiScore: data.aiScore ?? detailed.aiScore ?? 0,
    aiExplanation: data.aiExplanation ?? detailed.aiExplanation,
    virusTotal: data.virusTotal ?? detailed.virusTotal, // Check top-level first
    rules: data.rules ?? detailed.rules ?? [],
    status: data.verdict,
    createdAt: data.created_at,
  };
};

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
  analyzeUrl: async (url: string, content?: string) => {
    const response = await api.post<BackendScan>('/api/v1/scan', { url, content });
    return mapToFrontend(response.data);
  },
  getScan: async (id: string) => {
    const response = await api.get<BackendScan>(`/api/v1/scan/${id}`);
    return mapToFrontend(response.data);
  },
  getRecentScans: async (limit: number = 10, offset: number = 0) => {
    const response = await api.get<BackendScan[]>(`/api/v1/scan?limit=${limit}&offset=${offset}`);
    return response.data.map(mapToFrontend);
  },
};
