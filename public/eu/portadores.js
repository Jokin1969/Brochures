document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-pildoras');
    const msg = document.getElementById('pildoras-msg');

    if (!btn) return;

    btn.addEventListener('click', async () => {
        if (!('Notification' in window)) {
            showMsg(
                'Zure nabigatzaileak ez ditu jakinarazpenak onartzen. Aurrerapenak jarraitu ditzakezu zure mediku taldearekin zuzenean kontsultatuz.',
                'neutral'
            );
            return;
        }
        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                showMsg('Prest! Nobedadeak daudenean jakinaraziko dizugu.', 'success');
            } else {
                showMsg(
                    'Arazorik ez. Geroago eskatu dezakezu edo zure taldearekin zuzenean kontsultatu.',
                    'neutral'
                );
            }
        } catch (err) {
            showMsg('Une honetan ezin izan dira jakinarazpenak aktibatu.', 'neutral');
        }
    });

    function showMsg(text, type) {
        btn.style.display = 'none';
        msg.textContent = text;
        msg.className = 'pildoras-msg pildoras-msg--' + type;
        msg.style.display = 'inline-block';
    }
});
