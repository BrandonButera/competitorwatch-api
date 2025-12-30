# CompetitorWatch API Documentation

## Overview
Real-time web scraping API with AI-assisted analysis for competitor monitoring. Track pricing, products, reviews, and market trends across e-commerce platforms.

**Base URL:** `https://api.competitorwatch.com`
**Version:** `v1`
**Authentication:** API Key (`x-api-key` header)

---

## Products API

### GET `/api/v1/products/search`
Search for products across multiple retailers.

**Query Parameters**
- `keyword` (string) — Product keyword to search. One of `keyword`, `url`, or `sku` is required.
- `url` (string) — Direct product URL.
- `sku` (string) — Product SKU.
- `page` (number, default: 1) — Page number.
- `limit` (number, default: 20) — Results per page.

**Example**
```bash
curl -X GET "https://api.competitorwatch.com/api/v1/products/search?keyword=wireless%20headphones" \
  -H "x-api-key: your_api_key"
```

**Response Snapshot**
```json
{
  "success": true,
  "query": { "keyword": "wireless headphones" },
  "pagination": { "page": 1, "limit": 20, "total": 145 },
  "products": [
    {
      "id": "prod_001",
      "title": "Wireless Bluetooth Headphones",
      "retailer": "Amazon",
      "price": 79.99,
      "originalPrice": 129.99,
      "discount": "38%",
      "rating": 4.5,
      "reviews": 2341,
      "availability": "In Stock",
      "competitors": [
        { "retailer": "Best Buy", "price": 84.99 },
        { "retailer": "Walmart", "price": 75.99 }
      ]
    }
  ]
}
```

### GET `/api/v1/products/pricing`
Get real-time pricing data for specific products.

**Query Parameters**
- `productId` (string) — Product ID.
- `asin` (string) — Amazon ASIN.
- `sku` (string) — Product SKU.

**Response Highlights**
- Current prices across retailers.
- Price history with trends.
- Shipping costs and stock availability.
- Estimated delivery times.

### GET `/api/v1/products/reviews`
Get and analyze customer reviews with sentiment analysis.

**Query Parameters**
- `productId` (string) — Product ID.
- `retailer` (string) — Specific retailer.
- `limit` (number, default: 10) — Number of reviews.

**Response Highlights**
- Overall sentiment score and distribution.
- Top positive and negative themes.
- AI-powered summary of strengths and weaknesses.

---

## Market API

### GET `/api/v1/market/trends`
Analyze market trends and competitive landscape.

**Query Parameters**
- `category` (string) — Product category.
- `retailers` (array) — Retailer list (default: Amazon, Walmart, BestBuy).
- `timeframe` (string, default: `30days`) — Time window (`30days`, `90days`, `1year`).

**Response Highlights**
- Market size and growth.
- Price trends and volatility.
- Trending products (up/down).
- Seasonal patterns.
- Competitor metrics.

---

## Alerts API

### POST `/api/v1/alerts/setup`
Configure price alerts and notifications.

**Request Body (example)**
```json
{
  "productId": "prod_001",
  "targetPrice": 75.00,
  "notificationMethod": "email",
  "thresholdType": "exact"
}
```

### GET `/api/v1/alerts/monitoring`
Get list of active price alerts and current status.

**Response Highlights**
- Active alerts and current prices vs. targets.
- Notification history.
- Savings potential per alert and in total.

---

## Analysis API

### POST `/api/v1/analysis/comprehensive`
Deep analysis of competitor stores using Claude AI.

**Request Body (example)**
```json
{
  "storeUrl": "https://example-store.com",
  "productCategory": "Electronics",
  "competitors": ["Amazon", "Walmart"],
  "depth": "standard"
}
```

**Response Highlights**
- SWOT analysis and competitive intelligence.
- Strategic recommendations and marketing insights.
- Financial projections (mocked data).

---

## Health Check

### GET `/api/health`
API health status endpoint.

**Response Snapshot**
```json
{
  "status": "OK",
  "timestamp": "2025-01-27T14:30:00Z",
  "version": "1.0.0",
  "uptime": 3600,
  "checks": {
    "api": "operational",
    "database": "operational",
    "cache": "operational"
  }
}
```

---

## Authentication
Include your API key with every request:
```bash
x-api-key: your_api_key_here
```
