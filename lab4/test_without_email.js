const { Builder, By, Key, until } = require('selenium-webdriver');

async function runTest() {
  // Ініціалізуємо веб-драйвер
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // a) Користувач переходить на https://automationexercise.com/
    await driver.get('https://automationexercise.com/');

    // b) Натискає на кнопку “Sign in” на панелі меню.
    await driver.findElement(By.linkText('Signup / Login')).click();

    // c) Перевіряє що title “Automation Exercise”.
    const title = await driver.getTitle();
    console.log('Title:', title);
    if (title === 'Automation Exercise') {
      console.log('Title verification passed.');
    } else {
      console.log('Title verification failed.');
    }

   // d) Вводить логін і пароль у відповідні поля та натискає кнопку “Sign in”.
   await driver.findElement(By.name('email')).sendKeys('');
   await driver.findElement(By.name('password')).sendKeys('123456', Key.RETURN);

    // e) Перевіряє що виводиться повідомлення "An email address required"
    const errorText = await driver.findElement(By.xpath('//div[@class="alert alert-danger"]/ol/li'))
      .getText();
    console.log('Error Message:', errorText);
    if (errorText === 'An email address required.') {
      console.log('Error Message verification passed.');
    } else {
      console.log('Error Message verification failed.');
    }
  } finally {
    // Завершуємо сеанс драйвера
    await driver.quit();
  }
}

runTest();