import homePage from '../pages/home-page'
import loginPage from '../pages/login-page'
import appointmentPage from '../pages/appointment-page'
import  conformationPage from '../pages/conformation-page'

describe('Booking an appointment', () => {
  it('Validating successful appointment booking', () => {
    homePage.navigateTo()
    homePage.clickOnMakeAppointmentButton()
    loginPage.login('John Doe', 'ThisIsNotAPassword')
    appointmentPage.chooseFacility('Hongkong CURA Healthcare Center')
    appointmentPage.chooseDate("28","10","2022")
    appointmentPage.chooseHealthcareProgram('MedicaId')
    appointmentPage.addingComment('Fear of Edvin taking our photo randomly')
    appointmentPage.bookAnAppointment()
    conformationPage.validationOfBookingConformation('Hongkong CURA Healthcare Center','28/10/2022', 'Fear of Edvin taking our photo randomly')
  })
  it('Not filling out the required filed', () => {
    homePage.navigateTo()
    homePage.clickOnMakeAppointmentButton()
    loginPage.login('John Doe', 'ThisIsNotAPassword')
    appointmentPage.chooseFacility('Hongkong CURA Healthcare Center')
    appointmentPage.applyForReadmisson()
    appointmentPage.chooseHealthcareProgram('MedicaId')
    appointmentPage.addingComment('Fear of Edvin taking our photo randomly')
    appointmentPage.bookAnAppointment()
    appointmentPage.validationOfRequiredFieldWarning()
  })
})
