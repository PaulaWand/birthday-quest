const RECIPIENT = 'TWOJ_EMAIL_TUTAJ';

function doPost(e) {
  const data = JSON.parse(e.postData.contents || '{}');
  const attachments = [];

  addPng_(attachments, data.avatar, 'avatar_' + safe_(data.heroName) + '.png');
  addPng_(attachments, data.card, 'karta_' + safe_(data.heroName) + '.png');
  addPng_(attachments, data.invitation, 'zaproszenie_' + safe_(data.heroName) + '.png');

  const body = [
    'Nowe zgłoszenie Birthday Quest',
    '',
    'Gość: ' + (data.realName || ''),
    'Cosplay: ' + (data.cosplay || ''),
    'Uniwersum: ' + (data.universe || ''),
    '',
    'Imię bohatera: ' + (data.heroName || ''),
    'Tytuł: ' + (data.heroTitle || ''),
    'Klasa: ' + (data.heroClass || ''),
    '',
    'Lore:',
    data.lore || ''
  ].join('\n');

  MailApp.sendEmail({
    to: RECIPIENT,
    subject: 'Birthday Quest — ' + (data.heroName || data.realName || 'nowa postać'),
    body: body,
    attachments: attachments,
    name: 'Birthday Quest'
  });

  return ContentService.createTextOutput('ok');
}

function addPng_(list, dataUrl, filename) {
  if (!dataUrl || dataUrl.indexOf('base64,') === -1) return;
  const raw = dataUrl.split('base64,')[1];
  list.push(Utilities.newBlob(Utilities.base64Decode(raw), 'image/png', filename));
}

function safe_(value) {
  return String(value || 'hero')
    .replace(/[^a-zA-Z0-9_-]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .toLowerCase();
}
