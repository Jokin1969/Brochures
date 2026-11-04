document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-pildoras');
    const msg = document.getElementById('pildoras-msg');

    if (!btn) return;

    btn.addEventListener('click', async () => {
        if (!('Notification' in window)) {
            showMsg(
                'הדפדפן שלך אינו תומך בהתראות. תוכל לעקוב אחר ההתפתחויות בפנייה ישירה לצוות הרפואי שלך.',
                'neutral'
            );
            return;
        }
        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                showMsg('בוצע! נעדכן אותך כשיהיו חדשות.', 'success');
            } else {
                showMsg(
                    'אין בעיה. תוכל להפעילן מאוחר יותר בהגדרות הדפדפן שלך.',
                    'neutral'
                );
            }
        } catch (err) {
            showMsg('לא ניתן היה להפעיל את ההתראות כרגע.', 'neutral');
        }
    });

    function showMsg(text, type) {
        btn.style.display = 'none';
        msg.textContent = text;
        msg.className = 'pildoras-msg pildoras-msg--' + type;
        msg.style.display = 'inline-block';
    }
});
