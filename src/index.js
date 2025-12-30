require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Import route handlers
const productRoutes = require('./routes/products');
const marketRoutes = require('./routes/market');
const alertRoutes = require('./routes/alerts');
const analysisRoutes = require('./routes/analysis');
const healthRoutes = require('./routes/health');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
    credentials: true
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 900000,
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
    message: 'Too many requests, please try again later.'
});
app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// API Routes
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/market', marketRoutes);
app.use('/api/v1/alerts', alertRoutes);
app.use('/api/v1/analysis', analysisRoutes);
app.use('/api/health', healthRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.json({
          message: 'CompetitorWatch API v1.0',
          description: 'Real-time web scraping API with Claude AI analysis',
          version: '1.0.0',
          endpoints: {
                  products: '/api/v1/products',
                  productComparison: '/api/v1/products/compare',
                  market: '/api/v1/market',
                  alerts: '/api/v1/alerts',
                  analysis: '/api/v1/analysis',
                  health: '/api/health'
          }
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
          error: 'Endpoint not found',
          path: req.path,
          method: req.method
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(err.status || 500).json({
          error: err.message || 'Internal server error',
          status: err.status || 500
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`CompetitorWatch API running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
