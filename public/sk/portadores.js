document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-pildoras');
    const msg = document.getElementById('pildoras-msg');

    if (!btn) return;

    btn.addEventListener('click', async () => {
        if (!('Notification' in window)) {
            showMsg(
                'Váš prehliadač nepodporuje upozornenia. Vývoj môžete sledovať tak, že sa priamo obrátite na svoj lekársky tím.',
                'neutral'
            );
            return;
        }
        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                showMsg('Hotovo! Budeme vás informovať, keď budú novinky.', 'success');
            } else {
                showMsg(
                    'Žiadny problém. Aktivovať si ich môžete neskôr v nastaveniach svojho prehliadača.',
                    'neutral'
                );
            }
        } catch (err) {
            showMsg('Upozornenia sa momentálne nepodarilo aktivovať.', 'neutral');
        }
    });

    function showMsg(text, type) {
        btn.style.display = 'none';
        msg.textContent = text;
        msg.className = 'pildoras-msg pildoras-msg--' + type;
        msg.style.display = 'inline-block';
    }
});
