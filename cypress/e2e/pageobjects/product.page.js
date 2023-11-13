const ProductPage = {

    getRemoveButton: () => cy.get('button[class*="btn_secondary"][id*="remove"]'),
    clickRemoveButton: () => cy.get('button[class*="btn_secondary"][id*="remove"]').click(),

    visit: () => cy.visit('/inventory-item.html?id=1'),
    verify: () => ProductPage.getRemoveButton().should('be.visible'),
}

module.exports = {ProductPage};