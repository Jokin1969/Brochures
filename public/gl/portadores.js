document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-pildoras');
    const msg = document.getElementById('pildoras-msg');

    if (!btn) return;

    btn.addEventListener('click', async () => {
        if (!('Notification' in window)) {
            showMsg(
                'O teu navegador non admite notificacións. Podes seguir os avances consultando directamente co teu equipo médico.',
                'neutral'
            );
            return;
        }
        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                showMsg('Listo! Avisarémoste cando haxa novidades.', 'success');
            } else {
                showMsg(
                    'Sen problema. Podes pedilo máis adiante ou consultar directamente co equipo.',
                    'neutral'
                );
            }
        } catch (err) {
            showMsg('Non foi posible activar as notificacións neste momento.', 'neutral');
        }
    });

    function showMsg(text, type) {
        btn.style.display = 'none';
        msg.textContent = text;
        msg.className = 'pildoras-msg pildoras-msg--' + type;
        msg.style.display = 'inline-block';
    }
});
