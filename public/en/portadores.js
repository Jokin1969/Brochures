document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-pildoras');
    const msg = document.getElementById('pildoras-msg');
    btn.addEventListener('click', async () => {
        if (!('Notification' in window)) {
            showMsg('Your browser does not support notifications. Please check this page again for updates.', 'neutral');
            return;
        }
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            showMsg('Done! We\'ll let you know when there are updates.', 'success');
        } else {
            showMsg('No problem. You can enable notifications later from your browser settings.', 'neutral');
        }
    });
    function showMsg(text, type) {
        btn.style.display = 'none';
        msg.textContent = text;
        msg.className = 'pildoras-msg pildoras-msg--' + type;
        msg.style.display = 'inline-block';
    }
});
