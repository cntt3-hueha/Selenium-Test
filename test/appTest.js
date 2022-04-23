// const { Builder, By, Key, until } = require('selenium-webdriver');
// const { expect } = require('chai');
// const { Options } = require('selenium-webdriver/firefox');
// let { email, pass } = require("../credentials.json");


// let driver = new Builder().forBrowser('firefox').build();
// describe('Test Suite-newtours', function () {
//     this.timeout(0);

//     before(async () => {
//         await driver.get("http://bonghand.cf/dang-nhap");
//     });

//     it('Test Case #1- Verify user login email correct and password incorrect', async function () {
//         let emailEl = await driver.findElement(By.css("#email"))
//         let passwordEl =  await driver.findElement(By.css("#password"))
//             emailEl.sendKeys(email);
//             passwordEl.sendKeys(123456);
//         await driver.sleep(2000);
//         await driver.findElement(By.css("section.bg-home.d-flex.align-items-center:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.login-page.bg-white.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mb-0.mt-3:nth-child(3) > button.btn.btn-primary.btn-block")).click();

//         await driver.sleep(3000);

//         let successBanner = await driver.findElement(By.css('body:nth-child(2) > div.alert.alert-danger.alert-dismissible:nth-child(3)'));
//         let successBannerFirstMessage = await driver.findElement(By.css('body:nth-child(2) div.alert.alert-danger.alert-dismissible:nth-child(3) > strong:nth-child(2)'));
//         if (await successBannerFirstMessage.getAttribute('innerHTML') != 'Thất bại!') throw Error(await successBannerFirstMessage.getAttribute('innerHTML'));
//         let closeBannerButton = await driver.findElement(By.css('body:nth-child(2) div.alert.alert-danger.alert-dismissible:nth-child(3) > a.close:nth-child(1)'));
//         await closeBannerButton.click();

//     });

//     it('Test Case #2- Verify user login email incorrect and inputting password ', async function () {
//         let passwordEl =  await driver.findElement(By.css("#password"))
//         let emailEl = await driver.findElement(
//             By.css("#email"));
//         emailEl.clear();
//         emailEl.sendKeys("huehathi710+1000@gmail.com");
//         passwordEl.clear();
//         passwordEl.sendKeys(pass);
//         await driver.sleep(2000);
//         await driver.findElement(
//             By.css("section.bg-home.d-flex.align-items-center:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.login-page.bg-white.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mb-0.mt-3:nth-child(3) > button.btn.btn-primary.btn-block"))
//             .click();
//         await driver.sleep(3000);
//         let successBanner = await driver.findElement(By.css('body:nth-child(2) > div.alert.alert-danger.alert-dismissible:nth-child(3)'));
//         let successBannerFirstMessage = await driver.findElement(By.css('body:nth-child(2) div.alert.alert-danger.alert-dismissible:nth-child(3) > strong:nth-child(2)'));
//         if (await successBannerFirstMessage.getAttribute('innerHTML') != 'Thất bại!') throw Error(await successBannerFirstMessage.getAttribute('innerHTML'));
//         let closeBannerButton = await driver.findElement(By.css('body:nth-child(2) div.alert.alert-danger.alert-dismissible:nth-child(3) > a.close:nth-child(1)'));
//         await closeBannerButton.click();
        

//     });


//     it('Test Case #3- Verify that user login by inputting email and not inputting password', async function () {
//         let emailEl = await driver.findElement(By.css("#email"));
//         let passwordEl =  await driver.findElement(By.css("#password"));
//         let loginBtn = await driver.findElement(By.css("section.bg-home.d-flex.align-items-center:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.login-page.bg-white.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mb-0.mt-3:nth-child(3) > button.btn.btn-primary.btn-block"));
//             passwordEl.clear();
//             emailEl.clear();
//             emailEl.sendKeys(email);
//         await driver.sleep(2000);
//         await loginBtn.click();
//         await driver.sleep(2000);
//         var actualPasswordActivationMessage = await passwordEl.getAttribute("validationMessage");
//         var isValid = await driver.executeScript("return arguments[0].validity.valid;", passwordEl)
//         var isFormInvalid = await driver.executeScript("return arguments[0].validity.valid;", passwordEl)
//         if (isValid != false || actualPasswordActivationMessage != 'Please fill out this field.') throw Error(actualPasswordActivationMessage);
//     });

//     it('Test Case #4- Verify that user login by not inputting email and inputting password', async function () { 
//         let emailEl = await driver.findElement(By.css("#email"));
//         let passwordEl =  await driver.findElement(By.css("#password"));
//         let loginBtn = await driver.findElement(By.css("section.bg-home.d-flex.align-items-center:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.login-page.bg-white.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mb-0.mt-3:nth-child(3) > button.btn.btn-primary.btn-block"));
//         emailEl.clear();
//         passwordEl.clear();
//         passwordEl.sendKeys(pass);
//         await driver.sleep(2000);
//         loginBtn.click();
//         await driver.sleep(2000);
//         var actualEmailActivationMessage = await emailEl.getAttribute("validationMessage");
//         var isValid = await driver.executeScript("return arguments[0].validity.valid;", emailEl)
//         var isFormInvalid = await driver.executeScript("return arguments[0].validity.valid;", emailEl)
//         if (isValid != false || actualEmailActivationMessage != 'Please fill out this field.') throw Error(actualEmailActivationMessage);
//     });

//     it('Test Case #5- Verify user login  Successfully', async function () {
//         let emailEl = await driver.findElement(By.css("#email"))
//         let passwordEl =  await driver.findElement(By.css("#password"))
//         let loginBtn = await driver.findElement(By.css("section.bg-home.d-flex.align-items-center:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.login-page.bg-white.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mb-0.mt-3:nth-child(3) > button.btn.btn-primary.btn-block"));
//         emailEl.clear();
//         passwordEl.clear();
//         emailEl.sendKeys(email);
//         passwordEl.sendKeys(pass);
//         await driver.sleep(2000);
//         loginBtn.click();
//         await driver.sleep(2000);
//         let successBanner =  await driver.findElement(By.css("body:nth-child(2) > div.alert.alert-success.alert-dismissible:nth-child(9)"));
//         let successBannerContent = await driver.findElement(By.css("body:nth-child(2) div.alert.alert-success.alert-dismissible:nth-child(9) > strong:nth-child(2)"));
//         if(await successBannerContent.getAttribute('innerHTML') != 'Thành công!') throw Error('Login failed')
//     });

// });