const express = require('express');
const cors = require('cors');
const router = require('../routes/index');
let app = express();
app.use(cors());

app.use(express.static(__dirname));
// create application/json parser
app.use(express.json());

app.use(router)


app.listen(5000)
console.log('server is active')