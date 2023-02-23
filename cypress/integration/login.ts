import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {CheckoutPd} from "./pages/checkoutpd"
import {Removepd} from "./pages/removepd"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let checkoutpd = new CheckoutPd()
let removepds = new Removepd()

const URL = 'https://www.saucedemo.com/'

it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})

it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})

it('Test Sauce Demo Can Checkout Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
    checkoutpd.clickAddtoCart()
    checkoutpd.clickCart()
    checkoutpd.clickCheckout()
    checkoutpd.checkout('test','test','12345')
    checkoutpd.clickContinue()
    checkoutpd.clickFinish()
    checkoutpd.assertCheckout()
})

it("Test Sauce Demo Can't Checkout Sauce labs product backpack with empty postal code", () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
    checkoutpd.clickAddtoCart()
    checkoutpd.clickCart()
    checkoutpd.clickCheckout()
    checkoutpd.failcheckout('test','test')
    checkoutpd.clickContinue()
    checkoutpd.assertFailCheckout()
})