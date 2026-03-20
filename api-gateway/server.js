import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';

const app = express();

app.use(cors());

// logging
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// ✅ AUTH SERVICE
app.use('/auth', createProxyMiddleware({
  target: 'http://localhost:5000',
  changeOrigin: true
}));

// ✅ IMAGE SERVICE
app.use('/api', createProxyMiddleware({
  target: 'http://localhost:5001',
  changeOrigin: true
}));

app.listen(3001, () => {
  console.log('🚀 API Gateway running on http://localhost:3001');
});