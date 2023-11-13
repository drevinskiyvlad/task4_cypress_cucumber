import Page from './page.js';

class InventoryPage extends Page {

    inventoryList = cy.get('.inventory_list')
    menuButton = cy.get('#react-burger-menu-btn')
    logoutButton = cy.get('#logout_sidebar_link')
    addToCartButton = cy.get('button[class*="btn_inventory"][id*="add-to-cart"]')
    removeFromCartButton = cy.get('button[class*="btn_inventory"][id*="remove"]')
    cartButton = cy.get('a.shopping_cart_link')
    itemLabel = cy.get('#inventory_container .inventory_item:first-of-type .inventory_item_name')
    itemLink = cy.get('#inventory_container .inventory_item:first-of-type a')
    itemDetail = cy.get('.inventory_details_container')
    shoppingCartBadge = cy.get('.shopping_cart_badge')
    twitterLinkButton = cy.get('a[href*="twitter"]')
    facebookLinkButton = cy.get('a[href*="facebook"]')
    linkedinLinkButton = cy.get('a[href*="linkedin"]')

    // async initCartItemQuantity() {
    //     if (await this.shoppingCartBadge.isExisting())
    //         return parseInt(await this.shoppingCartBadge.getText())
    //     else
    //         return 0
    // }

    open() {
        return super.open('inventory.html');
    }
}

export default new InventoryPage();
