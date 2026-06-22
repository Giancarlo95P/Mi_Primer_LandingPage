export function inicializarSuscripcion() {
    const formulario = document.getElementById('form-suscripcion');
    const inputCorreo = document.getElementById('input-correo');
    const botonSuscribir = document.getElementById('btn-suscribir');

    // Si no estamos en la página que tiene este formulario, no hacemos nada (evita errores)
    if (!formulario) return;

    formulario.addEventListener('submit', async (e) => {
        e.preventDefault(); 

        const correo = inputCorreo.value.trim();
        const textoOriginal = botonSuscribir.innerText;
        
        botonSuscribir.innerText = 'ENVIANDO...';
        botonSuscribir.disabled = true;

        try {
            const respuesta = await fetch('http://localhost:3000/api/suscribir', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ correoUsuario: correo })
            });

            const data = await respuesta.json();

            if (respuesta.ok) {
                alert('¡Suscripción exitosa! Revisa tu bandeja de entrada.');
                inputCorreo.value = ''; 
            } else {
                alert('Hubo un error: ' + data.error);
            }
        } catch (error) {
            console.error('Error de conexión:', error);
            alert('No se pudo conectar con el servidor.');
        } finally {
            botonSuscribir.innerText = textoOriginal;
            botonSuscribir.disabled = false;
        }
    });
}