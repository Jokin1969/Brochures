document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-pildoras');
    const msg = document.getElementById('pildoras-msg');

    if (!btn) return;

    btn.addEventListener('click', async () => {
        if (!('Notification' in window)) {
            showMsg(
                'Ihr Browser unterstützt keine Benachrichtigungen. Sie können die Entwicklungen verfolgen, indem Sie sich direkt an Ihr medizinisches Team wenden.',
                'neutral'
            );
            return;
        }
        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                showMsg('Fertig! Wir informieren Sie, wenn es Neuigkeiten gibt.', 'success');
            } else {
                showMsg(
                    'Kein Problem. Sie können sie später in Ihren Browsereinstellungen aktivieren.',
                    'neutral'
                );
            }
        } catch (err) {
            showMsg('Benachrichtigungen konnten derzeit nicht aktiviert werden.', 'neutral');
        }
    });

    function showMsg(text, type) {
        btn.style.display = 'none';
        msg.textContent = text;
        msg.className = 'pildoras-msg pildoras-msg--' + type;
        msg.style.display = 'inline-block';
    }
});
