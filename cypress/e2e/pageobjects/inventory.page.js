const InventoryPage = {

    visit: () => cy.visit('/inventory.html'),
    getInventoryList: () => cy.get('.inventory_list'),
    getCartButton: () => cy.get('a.shopping_cart_link'),
    getLogoutButton: () => cy.get('#logout_sidebar_link'),
    getTwitterLinkButton: () => cy.get('a[href*="twitter"]'),
    getFacebookLinkButton: () => cy.get('a[href*="facebook"]'),
    getLinkedInLinkButton: () => cy.get('a[href*="linkedin"]'),
    clickLogoutButton: () => cy.get('#logout_sidebar_link').click(),
    clickMenuButton: () => cy.get('#react-burger-menu-btn').click(),

    verify: () =>{
        InventoryPage.getInventoryList().should('be.visible')
        InventoryPage.getCartButton().should('be.visible')
    },

    // inventoryList = cy.get('.inventory_list')
    // addToCartButton = cy.get('button[class*="btn_inventory"][id*="add-to-cart"]')
    // removeFromCartButton = cy.get('button[class*="btn_inventory"][id*="remove"]')
    // itemLabel = cy.get('#inventory_container .inventory_item:first-of-type .inventory_item_name')
    // itemLink = cy.get('#inventory_container .inventory_item:first-of-type a')
    // itemDetail = cy.get('.inventory_details_container')
    // shoppingCartBadge = cy.get('.shopping_cart_badge')
}

module.exports = {InventoryPage};

