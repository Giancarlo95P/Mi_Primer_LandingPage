export function initMenu() {
    // 1. Capturamos el botón y las tres líneas
    const btnMenu = document.getElementById('btnMenu');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    const mainNav = document.getElementById('main-nav');
    const overlay = document.getElementById('menu-overlay');

    // Validación de seguridad
    if (!btnMenu || !mainNav || !overlay) return;

    // Función para alternar el menú
    const toggleMenu = () => {
        // Mostrar u ocultar el overlay
        overlay.classList.toggle('hidden');

        // Línea 1: Se traslada hacia abajo (translate-y-2) y rota 45 grados
        line1.classList.toggle('translate-y-2');
        line1.classList.toggle('rotate-45');

        // Línea 2: Desaparece suavemente
        line2.classList.toggle('opacity-0');

        // Línea 3: Se traslada hacia arriba (-translate-y-2) y rota -45 grados
        line3.classList.toggle('-translate-y-2');
        line3.classList.toggle('-rotate-45');

        mainNav.classList.toggle('-translate-x-full');
        mainNav.classList.toggle('translate-x-0');

        // Control estricto de colores (Negro a Blanco)
        [line1, line2, line3].forEach(line => {
            if(line.classList.contains('bg-black')) {
                line.classList.remove('bg-black');
                line.classList.add('bg-white');
            } else {
                line.classList.remove('bg-white');
                line.classList.add('bg-black');
            }
        });
        // Bloqueo del Scroll
        document.body.classList.toggle('overflow-hidden');
        
    };

    btnMenu.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
}