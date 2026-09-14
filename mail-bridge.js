(()=>{
  const endpoint = window.BQ_MAIL_ENDPOINT || '';
  const params = new URLSearchParams(location.search);
  const isTest = params.get('test') === '1';
  if (!endpoint || isTest) return;

  let sent = false;
  const confirmBtn = document.getElementById('confirmBtn');
  if (!confirmBtn) return;

  function value(id){ return (document.getElementById(id)?.value || '').trim(); }
  function selectedClass(){
    const select = document.getElementById('heroClass');
    if (!select) return '';
    return select.value === '__other__' ? value('customClass') : select.value;
  }

  confirmBtn.addEventListener('click', () => {
    if (sent) return;

    // app.js generuje materiały podczas tego samego kliknięcia.
    setTimeout(async () => {
      if (sent) return;

      const card = sessionStorage.getItem('bq_card') || '';
      const avatar = sessionStorage.getItem('bq_avatar') || '';
      if (!card || !avatar) return;

      const inviteCanvas = document.getElementById('invitationPreview');
      const invitation = inviteCanvas ? inviteCanvas.toDataURL('image/png') : '';

      const payload = {
        realName: value('realName'),
        cosplay: value('cosplay'),
        universe: value('universe'),
        heroName: value('heroName'),
        heroTitle: value('heroTitle'),
        heroClass: selectedClass(),
        lore: value('lore'),
        avatar,
        card,
        invitation
      };

      try {
        await fetch(endpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: {'Content-Type':'text/plain;charset=utf-8'},
          body: JSON.stringify(payload)
        });
        sent = true;
        const notice = document.getElementById('mailNotice');
        if (notice) notice.textContent = 'Kopia zgłoszenia została wysłana do organizatorki.';
      } catch (err) {
        console.error('Birthday Quest mail error', err);
        const notice = document.getElementById('mailNotice');
        if (notice) notice.textContent = 'Nie udało się potwierdzić wysyłki kopii. Zaproszenie nadal możesz pobrać.';
      }
    }, 250);
  });
})();
