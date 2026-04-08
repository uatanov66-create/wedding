// ============================================================
// ВСТАВЬТЕ ЭТОТ КОД В GOOGLE APPS SCRIPT
// Расширения → Apps Script → удалить всё → вставить → сохранить
// ============================================================

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.name      || '',
      data.phone     || '',
      data.attend    || '',
      data.overnight || '',
      data.alcohol   || '',
      data.wish      || '',
      data.time      || new Date().toLocaleString('ru-RU')
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Тест — можно запустить вручную чтобы проверить
function doGet(e) {
  return ContentService
    .createTextOutput('Скрипт работает! ✓')
    .setMimeType(ContentService.MimeType.TEXT);
}
