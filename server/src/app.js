// import modules
const express = require('express');
const cors = require('cors');
const router = require('../routes/index');
const app = express();
app.use(cors());

app.use(express.static(__dirname));
// create application/json parser
app.use(express.json());

// use router
app.use(router)


app.listen(5000)
console.log('server is active')