describe('Login',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('Login with incorrect email',()=>{
        cy.fixture('login').then((login)=>{
            cy.get(login.loginLink).click();
            cy.get(login.email).type('something');
            cy.get(login.password).type('others');
            cy.get(login.loginButton).click();
            cy.get(login.incorrectLoginBanner).should('contain','Invalid email address');
        })
        

    })

})
