const express = require('express')
const app = express()
const port = 8080
// const {createProxyMiddleware} = require('http-proxy-middleware');

// app.use('/proxy', createProxyMiddleware({target: 'https://gateway.evarun.ru/api/v1/billing/api/test/testid', changeOrigin: true}));
app.use(express.static('dist'))

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
