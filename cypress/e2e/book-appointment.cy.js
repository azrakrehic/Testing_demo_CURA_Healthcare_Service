import homePage from '../pages/home-page'
import loginPage from '../pages/login-page'
import AppointmentPage from '../pages/appointment-page'
import  conformationPage from '../pages/conformation-page'

describe('Booking an appointment', () => {
  it('Validating successful appointment booking', () => {
    homePage.navigateTo()
    homePage.clickOnMakeAppointmentButton()
    loginPage.login('John Doe', 'ThisIsNotAPassword')
    AppointmentPage.chooseFacility('Hongkong CURA Healthcare Center')
    AppointmentPage.chooseDate("28","10","2022")
    AppointmentPage.chooseMedicaId()
    AppointmentPage.addingComment('Fear of Edvin taking our photo randomly')
    AppointmentPage.bookAnAppointment()
    conformationPage.validationOfBookingConformation('Hongkong CURA Healthcare Center','28/10/2022', 'Fear of Edvin taking our photo randomly' )

  })
})