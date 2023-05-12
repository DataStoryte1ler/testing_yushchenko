const { Builder, By, Key, until } = require('selenium-webdriver');

async function runTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://uk.wikipedia.org');

    // Знаходимо поле пошуку та вводимо запит "Київ"
    let searchInput = await driver.findElement(By.name('search'));
    await searchInput.sendKeys('Київ', Key.RETURN);
    await driver.get('https://uk.wikipedia.org/wiki/Київ');
    await driver.wait(until.titleContains('Київ'));
    

    // Зображення герба Києва
    let coatOfArmsImage = await driver.findElement(By.css('img[alt="COA of Kyiv Kurovskyi.svg"]'));
    let isCoatOfArmsImageDisplayed = await coatOfArmsImage.isDisplayed();
    console.log('Зображення герба Києва присутнє:', isCoatOfArmsImageDisplayed);

    // Перевірка присутності кількості населення
    let populationElement = await driver.findElement(By.css('[title="Населення"]'));
    let isPopulationElementDisplayed = await coatOfArmsImage.isDisplayed();
    console.log('Кількість населення:', isPopulationElementDisplayed);

    // Перевірка присутності середньої температури в квітні
    let aprilTemperatureElement = await driver.findElement(By.xpath("//th[contains(text(), 'Середня температура, °C')]"));
    let isAprilTemperatureElementDisplayed = await aprilTemperatureElement.isDisplayed();
    console.log('Середня температура в квітні:', isAprilTemperatureElementDisplayed);

    // Перевірка присутності густоти населення
    let populationDensityElement = await driver.findElement(By.css('[title="Населення"]'));
    let isPopulationDensityElementDisplayed = await populationDensityElement.isDisplayed();
    console.log('Густота населення:', isPopulationDensityElementDisplayed);

  } finally {
    // Завершення сеансу тестування
    await driver.quit();
  }
}

runTest().catch(console.error);

    

