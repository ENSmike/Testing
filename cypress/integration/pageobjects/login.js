class LoginPage {
    visit () {
        cy.visit('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php')
    }

    fillUsername(value){
        const field = cy.get(':nth-child(1) > .form-control');
        field.clear();
        field.type(value);
        return this
    }
    fillPassword(value){
        const field = cy.get(':nth-child(2) > .form-control')
        field.clear();
        field.type(value);
        return this
    }
    submit(){
        const button = cy.get('.btn')
        button.click();
    }
}      


export default LoginPage
