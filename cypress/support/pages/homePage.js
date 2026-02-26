class HomePage {


    
    // Elements
    get brandingLogo() {
        return cy.get('.titleText');
    }

    get searchBBC() {
        return  cy.get('[title="Search BBC"]') ;
    }

    // Methods
    visitHome() {
        // use the baseUrl defined in cypress.config.js (populated from .env)
        // cy.visit('/') will prepend the baseUrl automatically
        cy.visit('/');
    }

    clickBrandingLogo() {
        this.brandingLogo.click();
    }
}

export default HomePage;