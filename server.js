const express = require('express');
const app = express();
const PORT = 80;

// Use static files in "/public"
app.use(express.static('public'));

// Main route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start server listening on all interfaces (0.0.0.0)
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Host running in http://0.0.0.0:${PORT}`);
});
