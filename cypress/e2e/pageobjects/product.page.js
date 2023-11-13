const ProductPage = {

    visit: () => cy.visit('/inventory-item.html?id=1'),
    getRemoveButton: () => cy.get('button[class*="btn_secondary"][id*="remove"]'),
    clickRemoveButton: () => cy.get('button[class*="btn_secondary"][id*="remove"]').click(),

    verify: () => {
        ProductPage.getRemoveButton().should('be.visible')
    },
}

module.exports = { ProductPage };