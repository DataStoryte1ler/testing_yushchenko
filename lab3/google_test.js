const { Builder, By, Key, until } = require('selenium-webdriver');

async function runTest() {
  // Створення екземпляру веб-драйвера (Chrome)
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Відкриття головної сторінки Google
    await driver.get('https://www.google.com');

    // Перевірка заголовка сторінки
    let title = await driver.getTitle();
    console.log('Заголовок сторінки:', title);

    // Перевірка присутності логотипу
    let logoElement = await driver.findElement(By.css('img[alt="Google"]'));
    let isLogoDisplayed = await logoElement.isDisplayed();
    console.log('Логотип присутній:', isLogoDisplayed);

    // Перевірка присутності рядка пошуку
    let searchElement = await driver.findElement(By.name('q'));
    let isSearchDisplayed = await searchElement.isDisplayed();
    console.log('Рядок пошуку присутній:', isSearchDisplayed);

    // Перевірка присутності кнопки "пошук"
    let searchButtonElement = await driver.findElement(By.className('gNO89b'));
    let isSearchButtonDisplayed = await searchButtonElement.isDisplayed();
    console.log('Кнопка "Пошук" присутня:', isSearchButtonDisplayed);

    // Перевірка присутності посилання "Gmail"
    let gmailLinkElement = await driver.findElement(By.linkText('Gmail'));
    let isGmailLinkDisplayed = await gmailLinkElement.isDisplayed();
    console.log('Посилання "Gmail" присутнє:', isGmailLinkDisplayed);
  } finally {
    // Завершення сеансу тестування
    await driver.quit();
  }
}

runTest().catch(console.error);


