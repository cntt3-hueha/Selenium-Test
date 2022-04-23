// const {Builder, By, Key, until} = require('selenium-webdriver');
// const { expect } = require('chai');
// const { Options } = require('selenium-webdriver/firefox');
// let { email, pass } = require("../credentials.json"); 


// let driver = new Builder().forBrowser('firefox').build();
// describe( 'Test Suite-newtours' , function(){
//   this.timeout(0);

//     before(async () => {
//         await driver.get("http://bonghand.cf/dang-nhap");
//       });
    
//     it( 'Test Case #1- Verify user login email correct and password incorrect',async function(){
    
//       await driver.findElement(By.css("#email"))
//       .sendKeys(email); 
//       await driver.findElement(By.css("#password"))
//       .sendKeys(123456);
//       await driver.sleep(2000); 
//       await driver.findElement(By.css("section.bg-home.d-flex.align-items-center:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.login-page.bg-white.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mb-0.mt-3:nth-child(3) > button.btn.btn-primary.btn-block")).click();

//       await driver.sleep(3000);
      
//       let alert = await driver.switchTo().alert();
//       await driver.sleep(3000);
//       await alert.accept();

//   });

//   it( 'Test Case #2- Verify user login email incorrect and inputting password ',async function(){
//     await driver.findElement(
//       By.css("#email"))
//       .clear(); 
//     await driver.findElement(
//       By.css("#password"))
//       .clear();
//     await driver.findElement(
//       By.css("#email"))
//       .sendKeys("huehathi710@gmail.com"); 
//     await driver.findElement(
//       By.css("#password"))
//       .sendKeys(pass);
//     await driver.sleep(2000); 
//     await driver.findElement(
//       By.css("section.bg-home.d-flex.align-items-center:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.login-page.bg-white.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mb-0.mt-3:nth-child(3) > button.btn.btn-primary.btn-block"))
//       .click();

//     await driver.sleep(3000);
    
//     let alert = await driver.switchTo().alert();
//     await driver.sleep(3000);
//     await alert.accept();

//   });

  
//   it('Test Case #3- Verify that user login by not inputting email and inputting password', async function(){
//       await driver.findElement(
//         By.css("#email"))
//         .clear(); 
//       await driver.findElement(
//         By.css("#password"))
//         .clear();
//       await driver.findElement(By.css("#email"))
//       .sendKeys(email); 
//       await driver.sleep(2000);
//       await driver.findElement(By.css("section.bg-home.d-flex.align-items-center:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.login-page.bg-white.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mb-0.mt-3:nth-child(3) > button.btn.btn-primary.btn-block")).click();
//       await driver.sleep(2000);
//   });

//   it('Test Case #4- Verify that user login by inputting email and not inputting password', async function(){
//     await driver.findElement(By.css("#email")).clear(); 
//     await driver.findElement(By.css("#password")).clear();
//     await driver.findElement(By.css("#password"))
//     .sendKeys(pass); 
//     await driver.sleep(2000);
//     await driver.findElement(By.css("section.bg-home.d-flex.align-items-center:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.login-page.bg-white.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mb-0.mt-3:nth-child(3) > button.btn.btn-primary.btn-block")).click();
//     await driver.sleep(2000);
// });

//   it( 'Test Case #5- Verify user login  Successfully',async function(){
//     await driver.findElement(By.css("#email")).clear(); 
//     await driver.findElement(By.css("#password")).clear();
//     await driver.findElement(By.css("#email"))
//     .sendKeys(email); 
//     await driver.findElement(By.css("#password"))
//     .sendKeys(pass); 
//     await driver.sleep(2000);
//     await driver.findElement(By.css("section.bg-home.d-flex.align-items-center:nth-child(2) div.container div.row.align-items-center div.col-lg-5.col-md-6 div.card.login-page.bg-white.shadow.rounded.border-0 div.card-body form.login-form.mt-4 div.row:nth-child(2) div.col-lg-12.mb-0.mt-3:nth-child(3) > button.btn.btn-primary.btn-block")).click();
//     await driver.sleep(2000);
//     });

//   });