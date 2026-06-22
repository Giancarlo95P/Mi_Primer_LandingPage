import { Resend } from 'resend';
import EmailService from '../useCases/EmailService.js';

export default class ResendAdapter extends EmailService {
    constructor() {
        super();
        this.resend = new Resend(process.env.RESEND_API_KEY);
    }

    async enviar(para, asunto, contenidoHtml) {
        try {
            const data = await this.resend.emails.send({
                from: 'Omniguard Store <onboarding@resend.dev>',
                to: para,
                subject: asunto,
                html: contenidoHtml
            });
            return { exito: true, data };
        } catch (error) {
            console.error("Error conectando con Resend:", error);
            return { exito: false, error: error.message };
        }
    }
}