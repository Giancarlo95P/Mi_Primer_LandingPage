import SuscribirUsuario from '../useCases/SuscribirUsuario.js';
import ResendAdapter from '../adapters/ResendAdapter.js';

export default class SuscripcionController {
    static async manejar(req, res) {
        try {
            // 1. Extraemos los datos recibidos de la web
            const { correoUsuario } = req.body;

            // 2. Preparamos nuestras herramientas
            const servicioDeCorreos = new ResendAdapter();
            const procesoSuscripcion = new SuscribirUsuario(servicioDeCorreos);

            // 3. Ejecutamos la acción principal del negocio
            const resultadoEnvio = await procesoSuscripcion.ejecutar(correoUsuario);

            // 4. Respondemos según el resultado
            if (resultadoEnvio.exito) {
                res.status(200).json({ mensaje: '¡Suscripción exitosa!' });
            } else {
                res.status(500).json({ error: 'Hubo un problema enviando el correo de bienvenida.' });
            }
        } catch (error) {
            // Si el formato del correo es inválido, respondemos con el error de la Entidad
            res.status(400).json({ error: error.message });
        }
    }
}