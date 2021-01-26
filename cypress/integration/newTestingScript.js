describe('Indonesian version', () => {
    it('Test the home screen', () => {
        cy.visit('http://localhost/Kata-Rasa-semantic-ui/TestingForCypress/')
        cy.contains('Kata Rasa Indonesia')
        cy.contains('Keripik singkong dari Indonesia')
        cy.get('#buy-btn-body').contains('Beli Sekarang')
    })
})