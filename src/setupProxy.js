const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/system', { target: 'http://192.168.0.216:8060' }));
  app.use(proxy('/bond', { target: 'http://192.168.0.216:8060' }));
};