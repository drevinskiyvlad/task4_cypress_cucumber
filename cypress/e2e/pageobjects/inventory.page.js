const InventoryPage = {

    getInventoryList: () => cy.get('.inventory_list'),
    getLogoutButton: () => cy.get('#logout_sidebar_link'),
    getAddToCartButton: () => cy.get('button[class*="btn_inventory"][id*="add-to-cart"]'),
    getRemoveFromCartButton: () => cy.get('button[class*="btn_inventory"][id*="remove"]'),
    getShoppingCartBadge: () => cy.get('.shopping_cart_badge'),
    clickLogoutButton: () => cy.get('#logout_sidebar_link').click(),
    clickMenuButton: () => cy.get('#react-burger-menu-btn').click(),
    clickCartButton: () => cy.get('a.shopping_cart_link').click(),
    clickItemLink: () => cy.get('#inventory_container .inventory_item:first-of-type a'),


    visit: () => cy.visit('/inventory.html'),
    verify: () => InventoryPage.getInventoryList().should('be.visible'),
}

module.exports = {InventoryPage};

