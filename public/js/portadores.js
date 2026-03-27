document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-pildoras');
    const msg = document.getElementById('pildoras-msg');

    if (!btn) return;

    btn.addEventListener('click', async () => {
        if (!('Notification' in window)) {
            showMsg(
                'Tu navegador no admite notificaciones. Puedes seguir los avances consultando directamente con tu equipo médico.',
                'neutral'
            );
            return;
        }

        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                showMsg('¡Listo! Te avisaremos cuando haya novedades.', 'success');
            } else {
                showMsg(
                    'Sin problema. Puedes pedirlo más adelante o consultar directamente con tu equipo.',
                    'neutral'
                );
            }
        } catch (err) {
            showMsg(
                'No ha sido posible activar las notificaciones en este momento.',
                'neutral'
            );
        }
    });

    function showMsg(text, type) {
        btn.style.display = 'none';
        msg.textContent = text;
        msg.className = 'pildoras-msg pildoras-msg--' + type;
        msg.style.display = 'inline-block';
    }
});
