class LoginPage {
    visit () {
        cy.visit('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php')
    }

    fillUsername(value){
        const field = cy.get('[name="username"]')
        field.clear();
        field.type(value);
        return this
    }
    fillPassword(value){
        const field = cy.get('[name="password"]')
        field.clear();
        field.type(value);
        return this
    }
    submit(){
        const button = cy.get('.btn')
        button.click();
    }

    userF(){
        cy.get('span.help-block').should('include.text', 'Please enter your password')
    }
    passwordF(){
        cy.get('span.help-block').should('include.text', 'Please enter username.')
    }
}      


export default LoginPage
