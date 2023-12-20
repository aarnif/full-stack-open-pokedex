describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('can navigate to single pokemon page', function() {
    cy.visit('http://localhost:5000')
    cy.contains('venusaur').click()
    cy.contains('venusaur')
    cy.contains('Hidden ability')
    cy.contains('overgrow')
    cy.contains('chlorophyll')
  })
})