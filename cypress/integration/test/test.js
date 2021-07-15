

import { expect } from 'chai';
import { before } from 'lodash'
import LoginPage from '../pageobjects/login';
 

 describe('POM Implementation, visit site', ()=>{
  it ('Visits the pecodesoftware website', () => {
  const lp = new LoginPage();
  lp.visit()
  lp.fillUsername('123user')
  lp.fillPassword('user123')
  lp.submit()
  });
});
describe('POM Implementation 2', ()=>{
  it ('Only username filled', () => {
  const lp = new LoginPage();
  lp.visit()
  lp.fillUsername('123user')
  lp.submit()
  cy.get('span.help-block').should('include.text', 'Please enter your password')
 
  });
});
describe('POM Implementation 3', ()=>{
  it ('Only password filled', () => {
  const lp = new LoginPage();
  lp.visit()
  lp.fillPassword('user123')
  lp.submit()
  cy.get('span.help-block').should('include.text', 'Please enter username')
  });
});
describe('Fail because of unsuccessful login', ()=>{
  it ('Invalid data login assert', () => {
  const lp = new LoginPage();
  lp.visit()
  lp.fillUsername('123user')
  lp.fillPassword('user123')
  lp.submit()
  cy.get('span.help-block').should('not.include.text', '')
   
  
  //cy.get('span.help-block').should('not.include.text', 'No account found with that username')
 
  });
});