# CompetitorWatch API
Real-time web scraping API with Claude AI analysis for competitor monitoring. Track pricing, products, reviews, and market trends across e-commerce platforms.

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the API:
   ```bash
   npm start
   ```

The server starts from `src/index.js` and listens on the port configured via `PORT` (default `3000`).

## Notable endpoints
- `GET /api/v1/products/search`: Mock product search across multiple retailers.
- `GET /api/v1/products/pricing`: Pricing intelligence for a single product.
- `GET /api/v1/products/reviews`: Sentiment, highlights, and top review excerpts.
- `GET /api/v1/products/compare`: Compare a primary product against competitor listings. Supply `primaryId` and optional comma-separated `competitors`, plus `region` and `currency` if needed.
- `GET /api/v1/market/trends`: Market size and trend analysis mock data.
- `GET /api/v1/market/opportunities`: High-ROI gaps with channel mix and inventory signals.
- `POST /api/v1/alerts/setup`: Create a mock price alert.
- `GET /api/v1/alerts/monitoring`: View configured alerts and notification history.
- `GET /api/v1/alerts/performance`: Track alert win-rate, savings, and guardrails.
- `POST /api/v1/analysis/comprehensive`: Claude-style competitive analysis for a storefront.
- `GET /api/v1/analysis/benchmark`: Competitor scorecard with operational readiness signals.
