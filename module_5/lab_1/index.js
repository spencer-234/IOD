const express = require('express');
const app = express();
const port = [3000, 8000];

app.use('/', express.static('public'))

app.listen(port[0], () => {
    console.log(`example app listening at http://localhost:${port[0]}`)
})

app.listen(port[1], () => {
    console.log(`example app listening at http://localhost:${port[1]}`)
})