const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

app.use('/api', createProxyMiddleware({
  target: 'https://data.open.science',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', 
  },
}));

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
