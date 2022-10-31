class homePage {

    navigateTo() {
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    }

    clickOnMakeAppointmentButton() {
        this.elements.makeAppointmentButton().click()
    }

    elements = {
        makeAppointmentButton: () => cy.get('#btn-make-appointment')
    }
}
module.exports= new homePage()