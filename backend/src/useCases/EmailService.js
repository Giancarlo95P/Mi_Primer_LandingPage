export default class EmailService {
    async enviar(para, asunto, contenidoHtml) {
        throw new Error("El método 'enviar' debe ser implementado por un adaptador.");
    }
}