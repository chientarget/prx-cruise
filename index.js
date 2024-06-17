const express = require('express');
const request = require('request');
const app = express();

// Middleware để thêm các header CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Proxy các yêu cầu đến /api
app.use('/api', (req, res) => {
    const url = 'http://14.225.255.190:8081' + req.url;
    const options = {
        url: url,
        headers: {
            'User-Agent': 'request',  // Thêm User-Agent header
            // Thêm các header cần thiết khác nếu có
        }
    };
    req.pipe(request(options)).pipe(res);
});

// Route mặc định cho các yêu cầu khác
app.use((req, res) => {
    res.status(404).send('Not Found');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Proxy server listening on port ${port}`);
});
