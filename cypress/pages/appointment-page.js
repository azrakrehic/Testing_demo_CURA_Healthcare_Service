class appointmentPage {

    elements = {
        facility: () => cy.get('#combo_facility'),
        medicaid: () => cy.get('#radio_program_medicaid'),
        date: () => cy.get('#txt_visit_date'),
        comment: () => cy.get('#txt_comment'),
        bookButton: () => cy.get('#btn-book-appointment')
    }
    chooseFacility(name) {
        this.elements.facility().select(name)
    }

    addingComment(comment) {
        this.elements.comment().type(comment)
    }

    chooseDate(dan, mjesec, godina) {
        this.elements.date().type(dan + "/" + mjesec + "/" + godina)
    }

    chooseMedicaId() {
        this.elements.medicaid().click()
    }

    bookAnAppointment() {
        this.elements.bookButton().click()
    }
}

module.exports = new appointmentPage()