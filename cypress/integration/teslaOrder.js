
describe("routes to order form", ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza')
    })

    it("submit button should be disabled", ()=>{
        const submitButton = cy.get('button[type="submit"]')
        submitButton.should('be.disabled')
    })
})