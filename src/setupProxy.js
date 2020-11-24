const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/menu-principal',
    createProxyMiddleware({
      target: 'https://dev-navidad.pantheonsite.io',
      changeOrigin: true,
    })
  );
  app.listen(3000);
};
