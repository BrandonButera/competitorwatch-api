# CompetitorWatch API - Complete Documentation

## Overview

Real-time web scraping API with Claude AI analysis for competitor monitoring. Track pricing, products, reviews, and market trends across e-commerce platforms.

**Base URL:** `https://api.competitorwatch.com/api/v1`  
**Version:** 1.0.0  
**Authentication:** API Key (x-api-key header)

---

## Endpoints

### 1. Products API

#### GET /products/search
Search for products across multiple retailers with competitor pricing.

**Query Parameters:**
- `keyword` (string) - Product keyword to search
- - `url` (string) - Direct product URL
  - - `sku` (string) - Product SKU
    - - `page` (number) - Page number (default: 1)
      - - `limit` (number) - Results per page (default: 20)
       
        - **Example Request:**
        - ```bash
          curl -X GET "https://api.competitorwatch.com/api/v1/products/search?keyword=wireless%20headphones" \
            -H "x-api-key: your_api_key"
          ```

          **Response:**
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

          ---

          #### GET /products/pricing
          Get real-time pricing data for specific products.

          **Query Parameters:**
          - `productId` (string) - Product ID
          - - `asin` (string) - Amazon ASIN
            - - `sku` (string) - Product SKU
             
              - **Response includes:**
              - - Current prices across retailers
                - - Price history with trends
                  - - Shipping costs
                    - - Stock availability
                      - - Estimated delivery times
                       
                        - ---

                        #### GET /products/reviews
                        Get and analyze customer reviews with sentiment analysis.

                        **Query Parameters:**
                        - `productId` (string) - Product ID
                        - - `retailer` (string) - Specific retailer
                          - - `limit` (number) - Number of reviews (default: 10)
                           
                            - **Response includes:**
                            - - Overall sentiment score (1-5)
                              - - Review distribution
                                - - Top positive/negative themes
                                  - - AI-powered analysis of strengths/weaknesses
                                   
                                    - ---

                                    ### 2. Market API

                                    #### GET /market/trends
                                    Analyze market trends and competitive landscape.

                                    **Query Parameters:**
                                    - `category` (string) - Product category
                                    - - `retailers` (array) - Retailer list
                                      - - `timeframe` (string) - Time period (30days, 90days, 1year)
                                       
                                        - **Response includes:**
                                        - - Market size and growth
                                          - - Price trends and volatility
                                            - - Trending products (up/down)
                                              - - Seasonal patterns
                                                - - Competitor metrics
                                                 
                                                  - ---

                                                  ### 3. Alerts API

                                                  #### POST /alerts/setup
                                                  Configure price alerts and notifications.

                                                  **Request Body:**
                                                  ```json
                                                  {
                                                    "productId": "prod_001",
                                                    "targetPrice": 75.00,
                                                    "notificationMethod": "email",
                                                    "thresholdType": "exact"
                                                  }
                                                  ```

                                                  **Response:**
                                                  - Alert ID
                                                  - - Configuration details
                                                    - - Notification channels
                                                      - - Active status
                                                       
                                                        - ---

                                                        #### GET /alerts/monitoring
                                                        Get list of active price alerts.

                                                        **Response includes:**
                                                        - All active alerts
                                                        - - Current prices vs targets
                                                          - - Savings potential
                                                            - - Notification history
                                                              - - Total savings across alerts
                                                               
                                                                - ---

                                                                ### 4. Analysis API

                                                                #### POST /analysis/comprehensive
                                                                Deep analysis of competitor stores using Claude AI.

                                                                **Request Body:**
                                                                ```json
                                                                {
                                                                  "storeUrl": "https://example-store.com",
                                                                  "productCategory": "Electronics",
                                                                  "competitors": ["Amazon", "Walmart"],
                                                                  "depth": "standard"
                                                                }
                                                                ```

                                                                **Response includes:**
                                                                - SWOT Analysis
                                                                - - Competitive Intelligence (market share, growth trends)
                                                                  - - Strategic Recommendations
                                                                    - - Marketing Insights
                                                                      - - Financial Projections
                                                                       
                                                                        - ---

                                                                        ### 5. Health Check

                                                                        #### GET /health
                                                                        API health status endpoint.

                                                                        **Response:**
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

                                                                        All API requests require an API key in the header:

                                                                        ```bash
                                                                        x-api-key: your_api_key_here
                                                                        ```

                                                                        ---

                                                                        ## Rate Limiting

                                                                        - **Free Tier:** 100 requests/15 minutes
                                                                        - - **Starter:** 1,000 requests/month
                                                                          - - **Professional:** 10,000 requests/month
                                                                            - - **Enterprise:** Unlimited
                                                                             
                                                                              - Response headers include:
                                                                              - - `X-RateLimit-Limit`
                                                                                - - `X-RateLimit-Remaining`
                                                                                  - - `X-RateLimit-Reset`
                                                                                   
                                                                                    - ---

                                                                                    ## Error Handling

                                                                                    Standard HTTP status codes:
                                                                                    - `200` - Success
                                                                                    - - `400` - Bad Request
                                                                                      - - `401` - Unauthorized
                                                                                        - - `429` - Rate Limited
                                                                                          - - `500` - Server Error
                                                                                           
                                                                                            - Error Response Format:
                                                                                            - ```json
                                                                                              {
                                                                                                "error": "Error message",
                                                                                                "status": 400,
                                                                                                "timestamp": "2025-01-27T14:30:00Z"
                                                                                              }
                                                                                              ```

                                                                                              ---

                                                                                              ## Installation & Setup

                                                                                              ```bash
                                                                                              # Install dependencies
                                                                                              npm install

                                                                                              # Configure environment
                                                                                              cp .env.example .env
                                                                                              # Edit .env with your API keys

                                                                                              # Start server
                                                                                              npm start

                                                                                              # Development mode
                                                                                              npm run dev
                                                                                              ```

                                                                                              ---

                                                                                              ## Pricing Tiers

                                                                                              - **Free:** $0/month - 100 calls/month
                                                                                              - - **Starter:** $9.99/month - 1,000 calls/month
                                                                                                - - **Professional:** $49.99/month - 10,000 calls/month
                                                                                                  - - **Enterprise:** Custom pricing
                                                                                                   
                                                                                                    - ---
                                                                                                    
                                                                                                    ## Support
                                                                                                    
                                                                                                    For issues and questions, contact: support@competitorwatch.com
