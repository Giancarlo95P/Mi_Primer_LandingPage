import Suscriptor from '../entities/Suscriptor.js';

export default class SuscribirUsuario {
    constructor(emailService) {
        this.emailService = emailService;
    }

    async ejecutar(correoUsuario) {
        const nuevoSuscriptor = new Suscriptor(correoUsuario);
        
        const resultado = await this.emailService.enviar(
            nuevoSuscriptor.correo,
            '¡Bienvenido a Omniguard! Aquí tienes tu descuento',
            '<h1>¡Gracias por suscribirte!</h1><p>Tu código de 10% de descuento es: <strong>BIENVENIDO10</strong></p>'
        );

        return resultado;
    }
}