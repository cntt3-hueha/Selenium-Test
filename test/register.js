const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
const { Options } = require('selenium-webdriver/firefox');
let { email, pass, textFieldDefaultRequiredText, numberTextFieldDefaultRequiredText } = require("../credentials.json");


let driver = new Builder().forBrowser('firefox').build();
describe('Test User Register', function () {

    let fullnameData = 'Ha Thi Nga';
    let numberData = '0967847659';
    let addressData = 'Luong Son, Hai Chanh, Hai Lang, Quang Tri';
    let emailData = 'ngaha1999+6@gmail.com';
    let passwordData = 'toilatoi';
    let passwordConfirmationData = 'toilatoi';

    this.timeout(0);

    before(async () => {
        await driver.get("http://bonghand.cf/dang-ky");
    });

    it('Test Case #1- Verify user not input to any field and click on the register button', async function () {
        var submitBtn = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"));
        driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);
        await driver.sleep(1000);
        var username = driver.findElement(By.css("#fullname"));
        await submitBtn.click();
        var actualFullNameActivationMessage = await username.getAttribute("validationMessage");
        var isValid = await driver.executeScript("return arguments[0].validity.valid;", username)
        if (isValid != false || actualFullNameActivationMessage != textFieldDefaultRequiredText) throw Error(actualFullNameActivationMessage);
    });

    it('Test Case #2- User input text into only fullname field and click register button', async function () {
        var fullname = driver.findElement(By.css("#fullname"));
        var submitBtn = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"));
        driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)');
        await fullname.clear();
        await driver.sleep(1000);
        await fullname.sendKeys(fullnameData);
        driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);
        await driver.sleep(1000);
        await submitBtn.click();
        var number = await driver.findElement(By.css("#number"))
        var actualNumberActivationMessage = await number.getAttribute("validationMessage");
        var isValid = await driver.executeScript("return arguments[0].validity.valid;", number);
        if (isValid != false || actualNumberActivationMessage != numberTextFieldDefaultRequiredText) throw Error(actualNumberActivationMessage);
    });

    it('Test Case #3- User input text into fullname and number field, after that click register button', async function () {
        var fullname = driver.findElement(By.css("#fullname"));
        let number = await driver.findElement(By.css("#number"));
        let address = await driver.findElement(By.css("#address"));
        var submitBtn = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"));
        driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)');
        await fullname.clear();
        await number.clear();
        await driver.sleep(1000);
        await fullname.sendKeys(fullnameData);
        driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);
        await driver.sleep(1000);
        await submitBtn.click();
        var actualNumberActivationMessage = await number.getAttribute("validationMessage");
        var isValid = await driver.executeScript("return arguments[0].validity.valid;", number);
        if (isValid != false || actualNumberActivationMessage != numberTextFieldDefaultRequiredText) throw Error(actualNumberActivationMessage);
    });

    // it('Test Case #3- Paste text into fullname field', async function () {
    //     driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)');
    //     let fullname = await driver.findElement(By.css("#fullname"));
    //     let number = await driver.findElement(By.css("#number"));
    //     let address = await driver.findElement(By.css("#address"));
    //     let email = await driver.findElement(By.css("#email"));
    //     let password = await driver.findElement(By.css("#password"));
    //     let passwordConfirmation = await driver.findElement(By.css("#password_confirmation"));
    //     let submitBtn = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"));
    //     driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)');
    //     await driver.sleep(1000);
    //     fullname.clear();
    //     await driver.sleep(1000);
    //     number.clear();
    //     await driver.sleep(1000);
    //     fullname.sendKeys(fullnameData);
    //     await driver.sleep(1000);
    //     number.sendKeys(numberData);
    //     await driver.sleep(1000);
    //     driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);
    //     await driver.sleep(1000);
    //     submitBtn.click();
    //     await driver.sleep(2000);
    //     var actualAddressActivationMessage = await address.getAttribute("validationMessage");
    //     var isValid = await driver.executeScript("return arguments[0].validity.valid;", address);
    //     if (isValid != false || actualAddressActivationMessage != 'Vui lòng điền vào trường này.') throw Error(actualAddressActivationMessage);

    //     // await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"))
    //     // await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mt-4.text-center:nth-child(8) div.row:nth-child(2) div.col-6.mt-3:nth-child(1) > a.btn.btn-block.btn-light"))
    //     // await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mt-4.text-center:nth-child(8) div.row:nth-child(2) div.col-6.mt-3:nth-child(2) > a.btn.btn-block.btn-light"))
    //     // await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.mx-auto:nth-child(9) p.mb-0.mt-3 > a.text-dark.font-weight-bold:nth-child(2)"))
    // });

    // it('Test Case #4 - Paste text into fullname field', async function () {
    //     driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)');
    //     let fullname = await driver.findElement(By.css("#fullname"));
    //     let number = await driver.findElement(By.css("#number"));
    //     let address = await driver.findElement(By.css("#address"));
    //     let email = await driver.findElement(By.css("#email"));
    //     let password = await driver.findElement(By.css("#password"));
    //     let passwordConfirmation = await driver.findElement(By.css("#password_confirmation"));
    //     let submitBtn = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"));
    //     address.sendKeys(addressData);
    //     await driver.sleep(1000);
    //     driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);
    //     await driver.sleep(1000);
    //     submitBtn.click();
    //     await driver.sleep(2000);
    //     var actualEmailActivationMessage = await email.getAttribute("validationMessage");
    //     var isValid = await driver.executeScript("return arguments[0].validity.valid;", email);
    //     if (isValid != false || actualEmailActivationMessage != 'Vui lòng điền vào trường này.') throw Error(actualEmailActivationMessage);
    // });

    // it('Test Case #5 - Paste text into fullname field', async function () {
    //     driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)');
    //     let fullname = await driver.findElement(By.css("#fullname"));
    //     let number = await driver.findElement(By.css("#number"));
    //     let address = await driver.findElement(By.css("#address"));
    //     let email = await driver.findElement(By.css("#email"));
    //     let password = await driver.findElement(By.css("#password"));
    //     let passwordConfirmation = await driver.findElement(By.css("#password_confirmation"));
    //     let submitBtn = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"));
    //     email.sendKeys(emailData);
    //     await driver.sleep(1000);
    //     driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);
    //     await driver.sleep(1000);
    //     submitBtn.click();
    //     await driver.sleep(2000);
    //     var actualPasswordActivationMessage = await password.getAttribute("validationMessage");
    //     var isValid = await driver.executeScript("return arguments[0].validity.valid;", password);
    //     if (isValid != false || actualPasswordActivationMessage != 'Vui lòng điền vào trường này.') throw Error(actualPasswordActivationMessage);
    // });

    // it('Test Case #6 - Paste text into fullname field', async function () {
    //     driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)');
    //     let fullname = await driver.findElement(By.css("#fullname"));
    //     let number = await driver.findElement(By.css("#number"));
    //     let address = await driver.findElement(By.css("#address"));
    //     let email = await driver.findElement(By.css("#email"));
    //     let password = await driver.findElement(By.css("#password"));
    //     let passwordConfirmation = await driver.findElement(By.css("#password_confirmation"));
    //     let submitBtn = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"));
    //     password.sendKeys(passwordData);
    //     await driver.sleep(1000);
    //     driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);
    //     await driver.sleep(1000);
    //     submitBtn.click();
    //     await driver.sleep(2000);
    //     var actualPasswordConfirmationActivationMessage = await passwordConfirmation.getAttribute("validationMessage");
    //     var isValid = await driver.executeScript("return arguments[0].validity.valid;", passwordConfirmation);
    //     if (isValid != false || actualPasswordConfirmationActivationMessage != 'Vui lòng điền vào trường này.') throw Error(actualPasswordConfirmationActivationMessage);
    // });


    // it('Test Case #6 - Paste text into fullname field', async function () {
    //     // let registerLabel = await driver.findElement(By.css('section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-6:nth-child(1) div.form-group > label:nth-child(1)'));
    //     // throw Error(await registerLabel.getAttribute('innerHTML'));
    //     driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)');
    //     let fullname = await driver.findElement(By.css("#fullname"));
    //     let number = await driver.findElement(By.css("#number"));
    //     let address = await driver.findElement(By.css("#address"));
    //     let email = await driver.findElement(By.css("#email"));
    //     let password = await driver.findElement(By.css("#password"));
    //     let passwordConfirmation = await driver.findElement(By.css("#password_confirmation"));
    //     let submitBtn = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"));
    //     fullname.clear();
    //     number.clear();
    //     address.clear();
    //     email.clear();
    //     password.clear();
    //     passwordConfirmation.clear();
    //     fullname.sendKeys(fullnameData);
    //     number.sendKeys(numberData);
    //     address.sendKeys(addressData);
    //     email.sendKeys(emailData);
    //     password.sendKeys(passwordData);
    //     passwordConfirmation.sendKeys(passwordConfirmationData);
    //     await driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);
    //     await driver.sleep(1000);
    //     await submitBtn.click();
    //     await driver.sleep(2000);
    //     await driver.wait(until.urlContains('dang-nhap'), 1000);
    //     let successBanner = await driver.findElement(By.css('body:nth-child(2) > div.alert.alert-success.alert-dismissible:nth-child(3)'));
    //     let successBannerFirstMessage = await driver.findElement(By.css('body:nth-child(2) div.alert.alert-success.alert-dismissible:nth-child(3) > strong:nth-child(2)'));
    //     if (await successBannerFirstMessage.getAttribute('innerHTML') != 'Thành công!') throw Error(await successBannerFirstMessage.getAttribute('innerHTML'));
    //     let closeBannerButton = await driver.findElement(By.css('body:nth-child(2) div.alert.alert-success.alert-dismissible:nth-child(3) > a.close:nth-child(1)'));
    //     await closeBannerButton.click();
    //     await driver.findElement(By.css('#email')).sendKeys(emailData);
    //     await driver.findElement(By.css('#password')).sendKeys(passwordData);
    //     await driver.findElement(By.css('section.bg-home.d-flex.align-items-center:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.login-page.bg-white.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mb-0.mt-3:nth-child(3) > button.btn.btn-primary.btn-block')).click();
    //     await driver.sleep(3000);
    //     await driver.wait(until.urlIs('http://bonghand.cf/'), 1000);
    //     await driver.findElement(By.css('body:nth-child(2) > div.alert.alert-success.alert-dismissible:nth-child(9)'));
    //     if(await driver.findElement(By.css('body:nth-child(2) div.alert.alert-success.alert-dismissible:nth-child(9) > strong:nth-child(2)')).getAttribute('innerHTML') != 'Thành công!') throw Error('Login failed');
    //     await driver.findElement(By.css('body:nth-child(2) div.alert.alert-success.alert-dismissible:nth-child(9) > a.close:nth-child(1)')).click();

    // });


    // it('Test Case #2- Verify user register  Successfully', async function () {
    //     await driver.findElement(By.css("#email"))
    //         .sendKeys(email);
    //     await driver.findElement(By.css("#password"))
    //         .sendKeys(123456);
    //     await driver.sleep(2000);
    //     await driver.findElement(By.css("section.bg-home.d-flex.align-items-center:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.login-page.bg-white.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mb-0.mt-3:nth-child(3) > button.btn.btn-primary.btn-block")).click();

    //     await driver.sleep(3000);

    //     let alert = await driver.switchTo().alert();
    //     await driver.sleep(3000);
    //     await alert.accept();
    // });
    // it('Test Case #3- Verify user register  Successfully', async function () {
    //     await driver.findElement(By.css("#email"))
    //         .sendKeys(email);
    //     await driver.findElement(By.css("#password"))
    //         .sendKeys(123456);
    //     await driver.sleep(2000);
    //     await driver.findElement(By.css("section.bg-home.d-flex.align-items-center:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.login-page.bg-white.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mb-0.mt-3:nth-child(3) > button.btn.btn-primary.btn-block")).click();

    //     await driver.sleep(3000);

    //     let alert = await driver.switchTo().alert();
    //     await driver.sleep(3000);
    //     await alert.accept();
    // });
    // it('Test Case #4- Verify user register  Successfully', async function () {
    //     await driver.findElement(By.css("#email"))
    //         .sendKeys(email);
    //     await driver.findElement(By.css("#password"))
    //         .sendKeys(123456);
    //     await driver.sleep(2000);
    //     await driver.findElement(By.css("section.bg-home.d-flex.align-items-center:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.login-page.bg-white.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mb-0.mt-3:nth-child(3) > button.btn.btn-primary.btn-block")).click();

    //     await driver.sleep(3000);

    //     let alert = await driver.switchTo().alert();
    //     await driver.sleep(3000);
    //     await alert.accept();
    // });
    // it('Test Case #5- Verify user register  Successfully', async function () {
    //     await driver.findElement(By.css("#email"))
    //         .sendKeys(email);
    //     await driver.findElement(By.css("#password"))
    //         .sendKeys(123456);
    //     await driver.sleep(2000);
    //     await driver.findElement(By.css("section.bg-home.d-flex.align-items-center:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.login-page.bg-white.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mb-0.mt-3:nth-child(3) > button.btn.btn-primary.btn-block")).click();

    //     await driver.sleep(3000);

    //     let alert = await driver.switchTo().alert();
    //     await driver.sleep(3000);
    //     await alert.accept();
    // });
    // it('Test Case #6- Verify user register  Successfully', async function () {
    //     await driver.findElement(By.css("#email"))
    //         .sendKeys(email);
    //     await driver.findElement(By.css("#password"))
    //         .sendKeys(123456);
    //     await driver.sleep(2000);
    //     await driver.findElement(By.css("section.bg-home.d-flex.align-items-center:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.login-page.bg-white.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mb-0.mt-3:nth-child(3) > button.btn.btn-primary.btn-block")).click();

    //     await driver.sleep(3000);

    //     let alert = await driver.switchTo().alert();
    //     await driver.sleep(3000);
    //     await alert.accept();
    // });
    // it('Test Case #7- Verify user register  Successfully', async function () {
    //     await driver.findElement(By.css("#email"))
    //         .sendKeys(email);
    //     await driver.findElement(By.css("#password"))
    //         .sendKeys(123456);
    //     await driver.sleep(2000);
    //     await driver.findElement(By.css("section.bg-home.d-flex.align-items-center:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.login-page.bg-white.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mb-0.mt-3:nth-child(3) > button.btn.btn-primary.btn-block")).click();

    //     await driver.sleep(3000);

    //     let alert = await driver.switchTo().alert();
    //     await driver.sleep(3000);
    //     await alert.accept();
    // });
    // it('Test Case #8- Verify user register  Successfully', async function () {
    //     await driver.findElement(By.css("#email"))
    //         .sendKeys(email);
    //     await driver.findElement(By.css("#password"))
    //         .sendKeys(123456);
    //     await driver.sleep(2000);
    //     await driver.findElement(By.css("section.bg-home.d-flex.align-items-center:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.login-page.bg-white.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mb-0.mt-3:nth-child(3) > button.btn.btn-primary.btn-block")).click();

    //     await driver.sleep(3000);

    //     let alert = await driver.switchTo().alert();
    //     await driver.sleep(3000);
    //     await alert.accept();
    // });











    // await driver.findElement(By.css("#fullname"))
    // await driver.findElement(By.css("#number"))
    // await driver.findElement(By.css("#address"))
    // await driver.findElement(By.css("#email"))
    // await driver.findElement(By.css("#password"))
    // await driver.findElement(By.css("#password_confirmation"))
    // await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"))
    // await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mt-4.text-center:nth-child(8) div.row:nth-child(2) div.col-6.mt-3:nth-child(1) > a.btn.btn-block.btn-light"))
    // await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mt-4.text-center:nth-child(8) div.row:nth-child(2) div.col-6.mt-3:nth-child(2) > a.btn.btn-block.btn-light"))
    // await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.mx-auto:nth-child(9) p.mb-0.mt-3 > a.text-dark.font-weight-bold:nth-child(2)"))

});