const { Builder, By, Key, until } = require('selenium-webdriver');

async function runTest() {
  // Ініціалізуємо веб-драйвер
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // a) Користувач переходить на https://automationexercise.com/
    await driver.get('https://automationexercise.com/');

    // b) Натискає на кнопку “Sign in” на панелі меню.
    await driver.findElement(By.linkText('Signup / Login')).click();

    // c) Перевіряє що title “Login - My Store”.
    const title = await driver.getTitle();
    console.log('Title:', title);
    if (title === 'Login - My Store') {
      console.log('Title verification passed.');
    } else {
      console.log('Title verification failed.');
    }

    // d) Вводить логін і пароль у відповідні поля та натискає кнопку “Sign in”.
    await driver.findElement(By.name('email')).sendKeys('yar.mail134@gmail.com');
    await driver.findElement(By.name('password')).sendKeys('123456', Key.RETURN);

    // e) Перевіряє що title “Automation Exercise”.
    const newTitle = await driver.getTitle();
    console.log('New Title:', newTitle);
    if (newTitle === 'Automation Exercise') {
      console.log('New Title verification passed.');
    } else {
      console.log('New Title verification failed.');
    }

    // f) Перевіряє що правильні ім’я та прізвище користувача відображені на панелі меню.
    const userName = await driver.findElement(By.className('fa fa-user')).getText();
    console.log('User Name:', userName);
    if (userName === 'Yaroslav Yushchenko') {
      console.log('User Name verification passed.');
    } else {
      console.log('User Name verification failed.');
    }
  } finally {
    // Завершуємо сеанс драйвера
    await driver.quit();
  }
}

runTest();
