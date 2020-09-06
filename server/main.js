const express = require('express')
const app = express()
const port = 8080
const {createProxyMiddleware} = require('http-proxy-middleware');

app.use('/', createProxyMiddleware({
  target: 'https://gateway.evarun.ru/api/v1/billing/',
  changeOrigin: true,
  headers: {
    'Cookie': 'Authorization=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0MTcxNCIsImF1dGgiOiJST0xFX1BMQVlFUiIsIm1vZGVsSWQiOjk1NzAsImV4cCI6MTU5OTM4NjkzNn0.MGbg_Vw5DhXTkjcoqKw6sE-kLC4aZvRlBikICTC-cBJdGcY6nh5gGT0gnUmYzm2VqDAzhv0UZb_wknUqO63rCw'
  }
}));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
