/// <reference types="Cypress" />

context('Sign The contract', () => {
    before(() => {
        cy.viewport(1920, 1100)
    })
    it('let Sign the contract', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            // return false to prevent the error from
            // failing this test
            return false
        })
        cy.readFile('env.json').then((env) => {
            console.log('env', env);
            cy.visit(env.signLink);
            // cy.get('#control2').click();
            cy.get('button[mattooltip="Go to Signature box"]').click();
            cy.get('#control2').click();
            cy.get('input[formcontrolname=name]').type('Tam Test Automation');
            cy.get('button').contains('DONE').click();

            cy.get('.signature-field').first().click();
            cy.get('signature-pad').click();
            cy.get('signature-pad canvas').first().then((canvas)=>{

                let pad = canvas[0];
                let ctx = pad.getContext("2d");
                for (let i = 10; i < 200; i += 20)
                {
                    ctx.moveTo(0, i);
                    ctx.lineTo(pad.width, i);
                    ctx.stroke();
                }
                for (let i = 10; i <400; i += 20)
                {
                    ctx.moveTo(i, 0);
                    ctx.lineTo(i,pad.width/2);
                    ctx.stroke();
                }
            })
            cy.get('#mat-checkbox-2 .mat-checkbox-inner-container').click();
            cy.get('button').contains('DONE').click();
            cy.get('button').contains('SUBMIT ').click();
            cy.get('button').contains('Make Payment',10000).click();
            // cy.select('Make Payment',{timeout:15000}).click();
        })
    })

})
