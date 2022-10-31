class appointmentPage {

    elements = {
        facility: () => cy.get('#combo_facility'),
        readmission: () => cy.get('#chk_hospotal_readmission'),
        medicaid: () => cy.get('#radio_program_medicaid'),
        medicare: () => cy.get('#radio_program_medicare'),
        noneProgram: () => cy.get('#radio_program_none'),
        date: () => cy.get('#txt_visit_date'),
        datePicker: () => cy.get('.datepicker'),
        comment: () => cy.get('#txt_comment'),
        bookButton: () => cy.get('#btn-book-appointment')
    }
    chooseFacility(name) {
        this.elements.facility().select(name)
    }

    applyForReadmisson() {
        this.elements.readmission().click()
    }

    addingComment(comment) {
        this.elements.comment().type(comment)
    }

    chooseDate(day, month, year) {
        this.elements.date().type(day + "/" + month + "/" + year)
    }

    chooseHealthcareProgram(value='none') {
        if (value=="MedicaId")
            this.elements.medicaid().click()
        else if (value=="Medicare")
            this.elements.medicare().click()
        else
            this.elements.noneProgram().click()
    }
    bookAnAppointment() {
        this.elements.bookButton().click()
    }
    validationOfRequiredFieldWarning() {
        this.elements.datePicker().should('be.visible')
    }
}

module.exports = new appointmentPage()