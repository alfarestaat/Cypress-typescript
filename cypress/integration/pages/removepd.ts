export class Removepd{
    btn_remove_cart = '#remove-sauce-labs-backpack' 

    clickRemove(){
        cy.get(this.btn_remove_cart).click()
    }
   
    assertRemove(){
        cy.get('.cart_item_label').should('not.be.visible')
        //cy.contains('Remove').should('not.be.visible') 
    }
    
}