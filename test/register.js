const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
const { Options } = require('selenium-webdriver/firefox');
let { email,
    pass,
    textFieldDefaultRequiredText,
    numberTextFieldDefaultRequiredText,
    fullnameData,
    numberData,
    addressData,
    emailData,
    passwordData,
    passwordConfirmationData } = require("../credentials.json");


let driver = new Builder().forBrowser('firefox').build();
describe('Test register function', function () {
    this.timeout(0);

    before(async () => {
        await driver.get("http://bonghand.cf/dang-ky");
    });

    it('Test Case #1- Verify user not input to any field and click on the register button', async function () {
        //return;
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
        //return;
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
        //return;
        var fullname = driver.findElement(By.css("#fullname"));
        let number = await driver.findElement(By.css("#number"));
        let address = await driver.findElement(By.css("#address"));
        var submitBtn = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"));
        driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)');
        await fullname.clear();
        await number.clear();
        await driver.sleep(1000);
        await fullname.sendKeys(fullnameData);
        await number.sendKeys(numberData);
        driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);
        await driver.sleep(1000);
        await submitBtn.click();
        var actualAddressActivationMessage = await address.getAttribute("validationMessage");
        var isValid = await driver.executeScript("return arguments[0].validity.valid;", address);
        if (isValid != false || actualAddressActivationMessage != textFieldDefaultRequiredText) throw Error(actualAddressActivationMessage);
    });

    it('Test Case #4- User input text into fullname number, address field, after that click register button', async function () {
        //return;
        var fullname = driver.findElement(By.css("#fullname"));
        let number = await driver.findElement(By.css("#number"));
        let address = await driver.findElement(By.css("#address"));
        let email = await driver.findElement(By.css("#email"));
        var submitBtn = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"));
        driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)');
        await fullname.clear();
        await number.clear();
        await address.clear();
        await driver.sleep(1000);
        await fullname.sendKeys(fullnameData);
        await number.sendKeys(numberData);
        await address.sendKeys(addressData);
        driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);
        await driver.sleep(1000);
        await submitBtn.click();
        var actualEmailActivationMessage = await email.getAttribute("validationMessage");
        var isValid = await driver.executeScript("return arguments[0].validity.valid;", email);
        if (isValid != false || actualEmailActivationMessage != textFieldDefaultRequiredText) throw Error(actualEmailActivationMessage);
    });

    it('Test Case #5- User input text into fullname, number, address, email field, after that click register button', async function () {
        //return;
        var fullname = driver.findElement(By.css("#fullname"));
        let number = await driver.findElement(By.css("#number"));
        let address = await driver.findElement(By.css("#address"));
        let email = await driver.findElement(By.css("#email"));
        let password = await driver.findElement(By.css("#password"));
        var submitBtn = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"));
        driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)');
        await fullname.clear();
        await number.clear();
        await address.clear();
        await email.clear();

        await driver.sleep(1000);
        await fullname.sendKeys(fullnameData);
        await number.sendKeys(numberData);
        await address.sendKeys(addressData);
        await email.sendKeys(emailData);
        driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);
        await driver.sleep(1000);
        await submitBtn.click();
        var actualPasswordActivationMessage = await password.getAttribute("validationMessage");
        var isValid = await driver.executeScript("return arguments[0].validity.valid;", password);
        if (isValid != false || actualPasswordActivationMessage != textFieldDefaultRequiredText) throw Error(actualPasswordActivationMessage);
    });

    it('Test Case #6- User input text into fullname, number, address, email, password field, after that click register button', async function () {
        //return;
        var fullname = driver.findElement(By.css("#fullname"));
        let number = await driver.findElement(By.css("#number"));
        let address = await driver.findElement(By.css("#address"));
        let email = await driver.findElement(By.css("#email"));
        let password = await driver.findElement(By.css("#password"));
        let passwordConfirmation = await driver.findElement(By.css("#password_confirmation"));
        var submitBtn = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"));
        driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)');
        await fullname.clear();
        await number.clear();
        await address.clear();
        await email.clear();
        await password.clear();

        await driver.sleep(1000);
        await fullname.sendKeys(fullnameData);
        await number.sendKeys(numberData);
        await address.sendKeys(addressData);
        await email.sendKeys(emailData);
        await password.sendKeys(passwordData);
        driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);
        await driver.sleep(1000);
        await submitBtn.click();
        var actualPasswordConfirmationActivationMessage = await passwordConfirmation.getAttribute("validationMessage");
        var isValid = await driver.executeScript("return arguments[0].validity.valid;", passwordConfirmation);
        if (isValid != false || actualPasswordConfirmationActivationMessage != textFieldDefaultRequiredText) throw Error(actualPasswordConfirmationActivationMessage);
    });

    it('Test Case #7 - User input phone number not enought 10 characters', async function () {
        //return;
        driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)');
        let fullname = await driver.findElement(By.css("#fullname"));
        let number = await driver.findElement(By.css("#number"));
        let address = await driver.findElement(By.css("#address"));
        let email = await driver.findElement(By.css("#email"));
        let password = await driver.findElement(By.css("#password"));
        let passwordConfirmation = await driver.findElement(By.css("#password_confirmation"));
        let submitBtn = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"));
        fullname.clear();
        number.clear();
        address.clear();
        email.clear();
        password.clear();
        passwordConfirmation.clear();
        await driver.sleep(1000);
        fullname.sendKeys(fullnameData);
        number.sendKeys('096777344');
        address.sendKeys(addressData);
        email.sendKeys(emailData);
        password.sendKeys(passwordData);
        passwordConfirmation.sendKeys(passwordConfirmationData);
        await driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);
        await driver.sleep(1000);
        await submitBtn.click();
        await driver.sleep(2000);
        let numberErrorMessage = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-6:nth-child(2) div.form-group div.position-relative:nth-child(2) span.form-message > span.text-danger"));
        let errorString = await numberErrorMessage.getAttribute('innerHTML');
        if (errorString.indexOf('Số điện thoại phải đủ 10 số!') == -1) throw Error(errorString)
    });

    it('Test Case #8 - User input text into phone number', async function () {
        //return;
        driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)');
        let fullname = await driver.findElement(By.css("#fullname"));
        let number = await driver.findElement(By.css("#number"));
        let address = await driver.findElement(By.css("#address"));
        let email = await driver.findElement(By.css("#email"));
        let password = await driver.findElement(By.css("#password"));
        let passwordConfirmation = await driver.findElement(By.css("#password_confirmation"));
        let submitBtn = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"));
        fullname.clear();
        number.clear();
        address.clear();
        email.clear();
        password.clear();
        passwordConfirmation.clear();
        await driver.sleep(1000);
        fullname.sendKeys(fullnameData);
        number.sendKeys('096777344abc');
        address.sendKeys(addressData);
        email.sendKeys(emailData);
        password.sendKeys(passwordData);
        passwordConfirmation.sendKeys(passwordConfirmationData);
        await driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);
        await driver.sleep(1000);
        await submitBtn.click();
        await driver.sleep(2000);
        var actualNumberConfirmationActivationMessage = await number.getAttribute("validationMessage");
        var isValid = await driver.executeScript("return arguments[0].validity.valid;", number);
        if (isValid != false || actualNumberConfirmationActivationMessage != numberTextFieldDefaultRequiredText) throw Error(actualNumberConfirmationActivationMessage);
    });

    it('Test Case #9 - User input not an email into email field', async function () {
        //return;
        driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)');
        let fullname = await driver.findElement(By.css("#fullname"));
        let number = await driver.findElement(By.css("#number"));
        let address = await driver.findElement(By.css("#address"));
        let email = await driver.findElement(By.css("#email"));
        let password = await driver.findElement(By.css("#password"));
        let passwordConfirmation = await driver.findElement(By.css("#password_confirmation"));
        let submitBtn = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"));
        fullname.clear();
        number.clear();
        address.clear();
        email.clear();
        password.clear();
        passwordConfirmation.clear();
        await driver.sleep(1000);
        fullname.sendKeys(fullnameData);
        number.sendKeys(numberData);
        address.sendKeys(addressData);
        email.sendKeys('ngaha1234');
        password.sendKeys(passwordData);
        passwordConfirmation.sendKeys(passwordConfirmationData);
        await driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);
        await driver.sleep(1000);
        await submitBtn.click();
        await driver.sleep(2000);
        let emailErrorMessage = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(4) div.form-group div.position-relative:nth-child(2) span.form-message > span.text-danger"));
        let errorString = await emailErrorMessage.getAttribute('innerHTML');
        if (errorString.indexOf('Lỗi cú pháp của email!') == -1) throw Error(errorString)
    });

    it('Test Case #10 - User input registed email into email field', async function () {
        //return;
        driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)');
        let fullname = await driver.findElement(By.css("#fullname"));
        let number = await driver.findElement(By.css("#number"));
        let address = await driver.findElement(By.css("#address"));
        let email = await driver.findElement(By.css("#email"));
        let password = await driver.findElement(By.css("#password"));
        let passwordConfirmation = await driver.findElement(By.css("#password_confirmation"));
        let submitBtn = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"));
        fullname.clear();
        number.clear();
        address.clear();
        email.clear();
        password.clear();
        passwordConfirmation.clear();
        await driver.sleep(1000);
        fullname.sendKeys(fullnameData);
        number.sendKeys(numberData);
        address.sendKeys(addressData);
        email.sendKeys('ngaha1999+2@gmail.com');
        password.sendKeys(passwordData);
        passwordConfirmation.sendKeys(passwordConfirmationData);
        await driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);
        await driver.sleep(1000);
        await submitBtn.click();
        await driver.sleep(2000);
        let emailErrorMessage = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(4) div.form-group div.position-relative:nth-child(2) span.form-message > span.text-danger"));
        let errorString = await emailErrorMessage.getAttribute('innerHTML');
        if (errorString.indexOf('Email đã tồn tại!') == -1) throw Error(errorString)
    });

    it('Test Case #11 - User input passord less than 8 charaters', async function () {
        driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)');
        let fullname = await driver.findElement(By.css("#fullname"));
        let number = await driver.findElement(By.css("#number"));
        let address = await driver.findElement(By.css("#address"));
        let email = await driver.findElement(By.css("#email"));
        let password = await driver.findElement(By.css("#password"));
        let passwordConfirmation = await driver.findElement(By.css("#password_confirmation"));
        let submitBtn = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"));
        fullname.clear();
        number.clear();
        address.clear();
        email.clear();
        password.clear();
        passwordConfirmation.clear();
        await driver.sleep(1000);
        fullname.sendKeys(fullnameData);
        number.sendKeys(numberData);
        address.sendKeys(addressData);
        email.sendKeys(emailData);
        password.sendKeys('1234567');
        passwordConfirmation.sendKeys('1234567');
        await driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);
        await driver.sleep(1000);
        await submitBtn.click();
        await driver.sleep(2000);
        let emailErrorMessage = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(5) div.form-group div.position-relative:nth-child(2) span.form-message > span.text-danger"));
        let errorString = await emailErrorMessage.getAttribute('innerHTML');
        if (errorString.indexOf('Độ dài tối thiểu 8!') == -1) throw Error(errorString)
    });

    it('Test Case #12 - User input confirm password is different password', async function () {
        driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)');
        let fullname = await driver.findElement(By.css("#fullname"));
        let number = await driver.findElement(By.css("#number"));
        let address = await driver.findElement(By.css("#address"));
        let email = await driver.findElement(By.css("#email"));
        let password = await driver.findElement(By.css("#password"));
        let passwordConfirmation = await driver.findElement(By.css("#password_confirmation"));
        let submitBtn = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"));
        fullname.clear();
        number.clear();
        address.clear();
        email.clear();
        password.clear();
        passwordConfirmation.clear();
        await driver.sleep(1000);
        fullname.sendKeys(fullnameData);
        number.sendKeys(numberData);
        address.sendKeys(addressData);
        email.sendKeys(emailData);
        password.sendKeys(passwordData);
        passwordConfirmation.sendKeys(passwordData + '1');
        await driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);
        await driver.sleep(1000);
        await submitBtn.click();
        await driver.sleep(2000);
        let emailErrorMessage = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(6) div.form-group div.position-relative:nth-child(2) span.form-message > span.text-danger"));
        let errorString = await emailErrorMessage.getAttribute('innerHTML');
        if (errorString.indexOf('Mật khẩu và xác nhận mật khẩu phải khớp!') == -1) throw Error(errorString)
    });

    it('Test Case #13 - Register successfully and logged in', async function () {
        //return;
        driver.executeScript('window.scrollTo(document.body.scrollHeight, 0)');
        let fullname = await driver.findElement(By.css("#fullname"));
        let number = await driver.findElement(By.css("#number"));
        let address = await driver.findElement(By.css("#address"));
        let email = await driver.findElement(By.css("#email"));
        let password = await driver.findElement(By.css("#password"));
        let passwordConfirmation = await driver.findElement(By.css("#password_confirmation"));
        let submitBtn = await driver.findElement(By.css("section.bg-auth-home.d-table.w-100:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-md-12:nth-child(7) > button.btn.btn-primary.btn-block"));
        fullname.clear();
        number.clear();
        address.clear();
        email.clear();
        password.clear();
        passwordConfirmation.clear();
        await driver.sleep(1000);
        fullname.sendKeys(fullnameData);
        number.sendKeys(numberData);
        address.sendKeys(addressData);
        email.sendKeys(emailData);
        password.sendKeys(passwordData);
        passwordConfirmation.sendKeys(passwordConfirmationData);
        await driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);
        await driver.sleep(1000);
        await submitBtn.click();
        await driver.sleep(2000);
        await driver.wait(until.urlContains('dang-nhap'), 1000);
        let successBanner = await driver.findElement(By.css('body:nth-child(2) > div.alert.alert-success.alert-dismissible:nth-child(3)'));
        let successBannerFirstMessage = await driver.findElement(By.css('body:nth-child(2) div.alert.alert-success.alert-dismissible:nth-child(3) > strong:nth-child(2)'));
        if (await successBannerFirstMessage.getAttribute('innerHTML') != 'Thành công!') throw Error(await successBannerFirstMessage.getAttribute('innerHTML'));
        let closeBannerButton = await driver.findElement(By.css('body:nth-child(2) div.alert.alert-success.alert-dismissible:nth-child(3) > a.close:nth-child(1)'));
        await closeBannerButton.click();
        await driver.findElement(By.css('#email')).sendKeys(emailData);
        await driver.findElement(By.css('#password')).sendKeys(passwordData);
        await driver.findElement(By.css('section.bg-home.d-flex.align-items-center:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.login-page.bg-white.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mb-0.mt-3:nth-child(3) > button.btn.btn-primary.btn-block')).click();
        await driver.sleep(3000);
        await driver.wait(until.urlIs('http://bonghand.cf/'), 1000);
        await driver.findElement(By.css('body:nth-child(2) > div.alert.alert-success.alert-dismissible:nth-child(9)'));
        if (await driver.findElement(By.css('body:nth-child(2) div.alert.alert-success.alert-dismissible:nth-child(9) > strong:nth-child(2)')).getAttribute('innerHTML') != 'Thành công!') throw Error('Login failed');
        await driver.findElement(By.css('body:nth-child(2) div.alert.alert-success.alert-dismissible:nth-child(9) > a.close:nth-child(1)')).click();
    });

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