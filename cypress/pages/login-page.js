class loginPage {

    elements = {
        username: () => cy.get('#txt-username'),
        password: () => cy.get('#txt-password'),
        // defaultUsername: () => cy.get('#demo_username_label').siblings('input'),
        // defaultPassword: () => cy.get('#demo_password_label').siblings('input'),
        loginButton: () => cy.get('#btn-login')
    }

    login(username, password) {
        this.elements.username().type(username)
        this.elements.password().type(password)
        this.elements.loginButton().click()
    }
}

module.exports = new loginPage()