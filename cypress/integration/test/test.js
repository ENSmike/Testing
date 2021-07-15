 
import LoginPage from '../pageobjects/login';
 
const loginPage = new LoginPage();
 describe('POM Implementation, visit LoginPage', ()=>{

    before(() => {
      it ('Visits the pecodesoftware website', () => {
        loginPage.visit()
        loginPage.fillUsername('123user')
        loginPage.fillPassword('user123')
        loginPage.submit()
        });
    })

 
      it ('Only username filled', () => {
        loginPage.visit()
        loginPage.fillUsername('123user')
        loginPage.submit()
        loginPage.userF()
      });
  
    after(() => { 
      it ('Only password filled', () => {
        loginPage.visit()
        loginPage.fillPassword('user123')
        loginPage.submit()
        loginPage.passwordF()
      });
    });
});
 


describe('Failed because of unsuccessful login', ()=>{
    it ('Invalid data login assert', () => {
  loginPage.visit()
  loginPage.fillUsername('123user')
  loginPage.fillPassword('user123')
  loginPage.submit()
  loginPage.successful()
  }); 
});
 