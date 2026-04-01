document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-pildoras');
    const msg = document.getElementById('pildoras-msg');
    btn.addEventListener('click', async () => {
        if (!('Notification' in window)) {
            showMsg('El teu navegador no admet notificacions. Torna a consultar aquesta pàgina per a les novetats.', 'neutral');
            return;
        }
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            showMsg('Llest! T\'avisarem quan hi hagi novetats.', 'success');
        } else {
            showMsg('Cap problema. Ho pots demanar més endavant des de la configuració del navegador.', 'neutral');
        }
    });
    function showMsg(text, type) {
        btn.style.display = 'none';
        msg.textContent = text;
        msg.className = 'pildoras-msg pildoras-msg--' + type;
        msg.style.display = 'inline-block';
    }
});
