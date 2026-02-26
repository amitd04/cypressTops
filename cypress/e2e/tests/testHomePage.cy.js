
import homePage from "../../support/pages/homePage.js";


describe('Home Page Tests', () => {
    let HomePage;

    beforeEach(() => {
        HomePage = new homePage();
        cy.viewport(1440, 1080);
        HomePage.visitHome();
    });
    
    // Create an instance of the homePage class
    // This allows us to use the methods defined in the homePage class  
    //const HomePage = new homePage();

    // This test verifies that the home page title is correct    
    it('should verify that our POM is working', () => {

        HomePage.clickBrandingLogo()
        HomePage.searchBBC.should('be.visible').click()
        
    });

    
});