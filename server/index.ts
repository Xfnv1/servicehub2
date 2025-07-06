import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration for Firebase frontend
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    // Firebase hosting domains
    'https://teste3-38581.web.app',
    'https://teste3-38581.firebaseapp.com'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// API routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    message: 'ServiceHub API is running'
  });
});

// ServiceHub API endpoints
app.get('/api/categories', (req, res) => {
  res.json([
    { id: 1, name: 'Limpeza', icon: '🧹', color: '#3B82F6' },
    { id: 2, name: 'Reparos', icon: '🔧', color: '#10B981' },
    { id: 3, name: 'Jardinagem', icon: '🌱', color: '#F59E0B' },
    { id: 4, name: 'Pintura', icon: '🎨', color: '#8B5CF6' },
    { id: 5, name: 'Elétrica', icon: '⚡', color: '#EF4444' }
  ]);
});

app.get('/api/providers', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'João Silva',
      category: 'Limpeza',
      rating: 4.8,
      reviews: 127,
      location: 'São Paulo, SP',
      price: 'R$ 50/hora'
    },
    {
      id: 2,
      name: 'Maria Santos',
      category: 'Reparos',
      rating: 4.9,
      reviews: 89,
      location: 'Rio de Janeiro, RJ',
      price: 'R$ 80/hora'
    }
  ]);
});

app.get('/', (req, res) => {
  res.json({ 
    message: 'ServiceHub API Server', 
    version: '1.0.0',
    endpoints: [
      'GET /api/health',
      'GET /api/categories',
      'GET /api/providers'
    ],
    frontend: 'Hosted on Firebase',
    firebaseConfig: {
      authDomain: 'teste3-38581.firebaseapp.com',
      projectId: 'teste3-38581'
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 ServiceHub API Server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}`);
  console.log(`🔥 Frontend hosted on Firebase: https://teste3-38581.web.app`);
  console.log(`🌐 CORS configured for Firebase domains`);
});