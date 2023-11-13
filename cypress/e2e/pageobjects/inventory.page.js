const InventoryPage = {

    visit: () => cy.visit('/inventory.html'),
    getInventoryList: () => cy.get('.inventory_list'),
    getCartButton: () => cy.get('a.shopping_cart_link'),
    getLogoutButton: () => cy.get('#logout_sidebar_link'),
    getAddToCartButton: () => cy.get('button[class*="btn_inventory"][id*="add-to-cart"]'),
    getRemoveFromCartButton: () => cy.get('button[class*="btn_inventory"][id*="remove"]'),
    getItemLabel: () => cy.get('#inventory_container .inventory_item:first-of-type .inventory_item_name'),
    getShoppingCartBadge: () => cy.get('.shopping_cart_badge'),
    clickLogoutButton: () => cy.get('#logout_sidebar_link').click(),
    clickMenuButton: () => cy.get('#react-burger-menu-btn').click(),
    clickCartButton: () => cy.get('a.shopping_cart_link').click(),
    clickItemLink: () => cy.get('#inventory_container .inventory_item:first-of-type a'),


    verify: () => {
        InventoryPage.getInventoryList().should('be.visible')
        InventoryPage.getCartButton().should('be.visible')
    },
}

module.exports = {InventoryPage};

