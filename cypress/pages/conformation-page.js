class conformationPage {

    elements = {
        facility: () => cy.get("#facility"),
        readmission: () => cy.get("#hospital_readmission"),
        healthProgram: () => cy.get("#program"),
        visitDate: () => cy.get("#visit_date"),
        comment: () => cy.get("#comment"),
        title: () => cy.get(".lead").siblings('h2'),
        message: () => cy.get(".lead"),
        homePageButton: () => cy.get(".btn-default")
    }

    validationOfBookingConformation(facility, date, comment1) {
        this.elements.title().should('be.visible')
        this.elements.title().should('have.text', "Appointment Confirmation")
        this.elements.message().should('be.visible')
        this.elements.message().should('have.text', 'Please be informed that your appointment has been booked as following:')
        this.elements.facility().should('be.visible')
        this.elements.facility().should('have.text', facility)
        this.elements.readmission().should('be.visible')
        this.elements.readmission().should('have.text', 'No')
        this.elements.healthProgram().should('be.visible')
        this.elements.healthProgram().should('have.text', 'Medicaid')
        this.elements.visitDate().should('be.visible')
        this.elements.visitDate().should('have.text', date)
        this.elements.comment().should('be.visible')
        this.elements.comment().should('have.text', comment1)
        this.elements.homePageButton().should('have.text', "Go to Homepage")
        this.elements.homePageButton().should('be.visible')
    }
}

module.exports = new conformationPage()