const express = require('express');
const request = require('request');
const app = express();

app.use('/api', (req, res) => {
    const url = 'http://14.225.255.190:8081' + req.url;
    req.pipe(request({ qs: req.query, uri: url })).pipe(res);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Proxy server listening on port ${port}`);
});



