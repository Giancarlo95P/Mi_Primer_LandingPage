export default class Suscriptor {
    constructor(correo) {
        if (!correo || !correo.includes('@')) {
            throw new Error('El formato del correo es inválido.');
        }
        this.correo = correo;
        this.fechaRegistro = new Date();
    }
}