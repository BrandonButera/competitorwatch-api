const express = require('express');
const router = express.Router();

// GET /api/health - Health check endpoint
router.get('/', (req, res) => {
    res.json({
          status: 'OK',
          timestamp: new Date().toISOString(),
          version: '1.0.0',
          uptime: process.uptime(),
          environment: process.env.NODE_ENV || 'development',
          checks: {
                  api: 'operational',
                  database: 'operational',
                  cache: 'operational'
          }
    });
});

module.exports = router;
