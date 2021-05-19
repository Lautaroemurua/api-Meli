module.exports = {
    config:{
      ENV: process.env.NODE_ENV || 'development',
      PORT: process.env.BE_PORT || 3002,
      BASE_URL: 'https://api.mercadolibre.com/',
      ENDPOINTS: {
        search: 'sites/MLA/search',
        items: 'items'
      }
    }
  }