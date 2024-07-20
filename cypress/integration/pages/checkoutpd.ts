export class CheckoutPd{
    btn_addCart = '#add-to-cart'
    btn_cart = '#shopping_cart_container'
    btn_checkout = '#checkout'
    first_name = '#first-name'
    last_name = '#last-name' 
    zip_code = '#postal-code'
    btn_continue = '#continue'
    btn_finish = '#finish'

    inputFirstName(first: string){
        cy.get(this.first_name).type(first)
    }
    inputLastName(last: string){
        cy.get(this.last_name).type(last)
    }
    inputFirstNames(first: string){
        cy.get(this.first_name).type(first)
    }
    inputLastNames(last: string){
        cy.get(this.last_name).type(last)
    }
    inputZipCode(zip: string){
        cy.get(this.zip_code).type(zip)
    }
    clickAddtoCart(){
        cy.get(this.btn_addCart).click()
    }
    clickCart(){
        cy.get(this.btn_cart).click()
    }
    clickCheckout(){
        cy.get(this.btn_checkout).click()
    }
    clickContinue(){
        cy.get(this.btn_continue).click()
    }
    clickFinish(){
        cy.get(this.btn_finish).click()
    }

    assertCheckout(){
        cy.get('.complete-header').should('be.visible')
        cy.get('.pony_express').should('be.visible')
        cy.contains('Thank you for your order!').should('contain','Thank you for your order!')
    }

    assertFailCheckout(){
        cy.get('.checkout_info_container').should('be.visible')
        cy.contains('Error: Postal Code is required').should('contain','Error: Postal Code is required')
    }

    checkout(first : string,last : string,zip : string){
        this.inputFirstName(first)
        this.inputLastName(last)
        this.inputZipCode(zip)      
    }

    failcheckout(first : string,last : string){
        this.inputFirstNames(first)
        this.inputLastNames(last)     
    }

    
}