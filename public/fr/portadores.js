document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-pildoras');
    const msg = document.getElementById('pildoras-msg');

    if (!btn) return;

    btn.addEventListener('click', async () => {
        if (!('Notification' in window)) {
            showMsg(
                'Votre navigateur ne prend pas en charge les notifications. Vous pouvez suivre les avancées en vous adressant directement à votre équipe médicale.',
                'neutral'
            );
            return;
        }
        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                showMsg('C\'est fait ! Nous vous informerons dès qu\'il y aura des nouveautés.', 'success');
            } else {
                showMsg(
                    'Aucun problème. Vous pourrez les activer plus tard dans les paramètres de votre navigateur.',
                    'neutral'
                );
            }
        } catch (err) {
            showMsg('Les notifications n\'ont pas pu être activées pour le moment.', 'neutral');
        }
    });

    function showMsg(text, type) {
        btn.style.display = 'none';
        msg.textContent = text;
        msg.className = 'pildoras-msg pildoras-msg--' + type;
        msg.style.display = 'inline-block';
    }
});
