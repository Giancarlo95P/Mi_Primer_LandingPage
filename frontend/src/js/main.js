import { initMenu } from './modules/menu.js';
import { inicializarSuscripcion } from './modules/suscripcion.js';
import { initVideoModal } from './modules/videoModal.js';

document.addEventListener('DOMContentLoaded', () => {
    

    initMenu();
    initVideoModal();
    inicializarSuscripcion();

});