/// <reference types="Cypress" />

context('Get Signing link', () => {

    it('Goto approver mail box and click on email signing', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            // return false to prevent the error from
            // failing this test
            return false
        })
        cy.visit('http://www.yopmail.com/en/');
        cy.get('#login').clear().type('tenant_tcp');
        cy.get('input.sbut').click();

        cy.get('iframe#ifmail').should('exist').then($iframe => {
            const iframe = $iframe.contents();
            cy.wrap(iframe.find('body a')).should('exist').contains('Sign now').then(($a) => {
                Cypress.config('env', {...Cypress.config('env'), ...{'signLink': $a.attr('href')}});
                console.log(Cypress.config('env'));
                cy.writeFile('env.json', Cypress.config('env'))
            });

        });

    })

})

