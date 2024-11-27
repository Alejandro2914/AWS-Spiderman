const express = require('express');
const app = express();
const PORT = 80;

// Use static files in "/public"
app.use(express.static('public'));

// Main route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start server
app.listen(PORT, () => {
    console.log(`Host running in http://localhost:${PORT}`);
});
