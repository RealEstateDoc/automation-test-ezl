/// <reference types="Cypress" />

context('Get Signing link', () => {

    it('Goto approver mail box and click on email signing', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            // return false to prevent the error from
            // failing this test
            return false
        })
        cy.visit('https://www.mailinator.com/v3/index.jsp?zone=public&query=tanhc#/#inboxpane');
        cy.get('table.jambo_table tbody tr').first().find('a').click();
        cy.get('#parts_buttons button').first().click();

        cy.get('iframe#msg_body').should('exist').then($iframe => {
            const iframe = $iframe.contents();
            cy.wrap(iframe.find('body a')).should('exist').eq(1).then(($a) => {
                Cypress.config('env', {...Cypress.config('env'), ...{'signLink': $a.text()}});
                console.log(Cypress.config('env'));
                cy.writeFile('env.json', Cypress.config('env'))
            });

        });

    })

})

