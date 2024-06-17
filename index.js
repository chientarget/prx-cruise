const express = require('express');
const app = express();

app.get('/api/test', (req, res) => {
    res.json({ message: 'Test API is working!' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Test server listening on port ${port}`);
});
