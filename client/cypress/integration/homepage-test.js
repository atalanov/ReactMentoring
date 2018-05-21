describe('Kitchen Sink', () => {
    it('.should() - assert that <title> is correct', () => {
      cy.visit('http://localhost:3000');
      cy.title().should('include', 'React Mentoring');
    });
});
