///////////////This is the beginning of the test


describe('BBC Branding Demo', () => {

  context('1080p resolution', () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport(1440,1080)
    })

    it('should open BBC Branding and verify the title', () => {
      // Visit the BBC Branding website
      cy.visit('/');

      // Wait for a specific element to ensure the page is loaded
      cy.get('header').should('be.visible'); // Example: Wait for the header to be visible

      // Verify the title of the page
      cy.title().should('eq', 'Welcome to the BBC Branding site');
    });

    it('should check the presence of the BBC logo', () => {
      // Visit the BBC Branding website
      cy.visit('/');

      // Check if the BBC logo is present
      cy.get('#homepage-link').should('exist');
    
    });
  });
});