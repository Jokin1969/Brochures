document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-pildoras');
    const msg = document.getElementById('pildoras-msg');

    if (!btn) return;

    btn.addEventListener('click', async () => {
        if (!('Notification' in window)) {
            showMsg(
                'Il Suo browser non supporta le notifiche. Può seguire gli sviluppi rivolgendosi direttamente alla Sua équipe medica.',
                'neutral'
            );
            return;
        }
        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                showMsg('Fatto! La informeremo quando ci saranno novità.', 'success');
            } else {
                showMsg(
                    'Nessun problema. Può attivarle in seguito nelle impostazioni del Suo browser.',
                    'neutral'
                );
            }
        } catch (err) {
            showMsg('Al momento non è stato possibile attivare le notifiche.', 'neutral');
        }
    });

    function showMsg(text, type) {
        btn.style.display = 'none';
        msg.textContent = text;
        msg.className = 'pildoras-msg pildoras-msg--' + type;
        msg.style.display = 'inline-block';
    }
});
