/// <reference types="Cypress" />

context('Ezleasing', () => {
    before(() => {
        cy.visit('https://eleasing-realestatedoc.azurewebsites.net/user/login')
        cy.viewport(1920, 1100)
    })
    it('Login ', () => {
        cy.wait(200)
        cy.get('input[formcontrolname=email]').type('dev1040@yopmail.com')
        cy.get('input[formcontrolname=password]').type('12345678')
        cy.get('.btn-login').click();
    })
    it('Create new Atrium space Contract',()=>{
        cy.get('button[aria-haspopup=true]',{timeout:3000}).click();
        cy.get('.cdk-overlay-pane button.mat-menu-item').first().click();
        cy.get('input[formcontrolname=documentName]').type('This is my test contract for atrium type');
        cy.get('.company-search').first().click();
        cy.get('.cdk-overlay-pane mat-option').first().click();
        cy.get('#licenseTermData').click();
        cy.get('.cdk-overlay-pane mat-option').eq(3).click();
        cy.get('.license_term_button button').click();
        cy.get('input[formcontrolname=licenseTermEndDate]').parent().click();
        cy.get('td:not(.mat-calendar-body-disabled)').last().click();
        cy.get('button[type=submit]').click();
        cy.get('button.preview-btn').click();
        cy.get('.prepare-doc-button button').click();
        cy.get('button.btn-signature-actions',{timeout:15000}).click();
        cy.get('input[formcontrolname=ownerEmail]').last().type('tam@averspace.com');
        cy.get('input[formcontrolname=subject]').type('Subject is testing');
        cy.get('button[type=submit]').click();

    })

})
