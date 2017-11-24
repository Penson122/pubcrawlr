const express = require('express');
const app = new express();

const port = process.env.PORT || 3000;

app.get('/', (err, req, res, next) => {
   res.send('hello, world');
});

app.listen(port);
