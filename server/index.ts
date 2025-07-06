import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:5000',
    // Firebase hosting domains
    'https://teste3-38581.web.app',
    'https://teste3-38581.firebaseapp.com'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Serve static files from the React build
const buildPath = path.join(__dirname, '../dist/public');
app.use(express.static(buildPath));

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

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  // Skip API routes
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API endpoint not found' });
  }
  
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 ServiceHub Full-Stack Server running on port ${PORT}`);
  console.log(`📱 Frontend: http://localhost:${PORT}`);
  console.log(`📡 API: http://localhost:${PORT}/api`);
  console.log(`🔥 Also available on Firebase: https://teste3-38581.web.app`);
});