document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-pildoras');
    const msg = document.getElementById('pildoras-msg');

    if (!btn) return;

    btn.addEventListener('click', async () => {
        if (!('Notification' in window)) {
            showMsg(
                'O seu navegador não suporta notificações. Pode acompanhar os avanços consultando diretamente a sua equipa médica.',
                'neutral'
            );
            return;
        }
        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                showMsg('Pronto! Avisaremos quando houver novidades.', 'success');
            } else {
                showMsg(
                    'Sem problema. Pode ativá-las mais tarde nas definições do seu navegador.',
                    'neutral'
                );
            }
        } catch (err) {
            showMsg('Não foi possível ativar as notificações neste momento.', 'neutral');
        }
    });

    function showMsg(text, type) {
        btn.style.display = 'none';
        msg.textContent = text;
        msg.className = 'pildoras-msg pildoras-msg--' + type;
        msg.style.display = 'inline-block';
    }
});
