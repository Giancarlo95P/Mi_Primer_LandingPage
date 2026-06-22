import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import SuscripcionController from './src/controllers/SuscripcionController.js';

// Inicializamos las variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
    res.json({ mensaje: '¡Servidor corriendo con Clean Architecture y ES Modules! 🚀' });
});

app.post('/api/suscribir', SuscripcionController.manejar);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});