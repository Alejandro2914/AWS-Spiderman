const express = require('express');
const app = express();
const PORT = 3000;  // Cambia a 8080 si tienes problemas con el puerto 80

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Host running in http://localhost:${PORT}`);
});
