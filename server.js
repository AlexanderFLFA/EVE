const express = require('express');
const app = express();
const port = 3000;

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Ruta de inicio
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
