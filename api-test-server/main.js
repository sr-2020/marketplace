const express = require('express');
const cors = require('cors');
const app = express();
const mock = require('./mock')
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}))

app.get('/Billing/info/getmyshops', function (req, res) {
  res.json(mock.oneShop)
})

app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 8080')
})
