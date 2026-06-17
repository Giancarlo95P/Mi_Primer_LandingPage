export function initVideoModal() {
    const btnVideo = document.getElementById('btnVideo');
    const videoModal = document.getElementById('videoModal');
    const videoOverlay = document.getElementById('videoOverlay');
    const closeVideo = document.getElementById('closeVideo');
    const promoVideo = document.getElementById('promoVideo');

    if (!btnVideo || !videoModal) return;

    const openModal = () => {
        videoModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden'); // Evita el scroll del fondo
        promoVideo.play();
        promoVideo.currentTime = 0; // Reinicia el video al abrir el modal
        promoVideo.volume = 0.4; // Ajusta el volumen al 40% (opcional)
    }

    const closeModal = () => {
        videoModal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        promoVideo.pause();
    }

    
    btnVideo.addEventListener('click', openModal);
    closeVideo.addEventListener('click', closeModal);
    videoOverlay.addEventListener('click', closeModal);
}