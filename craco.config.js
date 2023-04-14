const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@api': path.join(__dirname,'src/request'),
      '@components': path.join(__dirname,'src/components'),
      '@utils': path.join(__dirname,'src/utils'),
      '@views': path.join(__dirname,'src/views')
    }
  }
}
