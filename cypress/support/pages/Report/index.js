// Ações de interação com a página

/// <reference types="cypress" />

const el = require('./elements').ELEMENTS;

class Report {

    accessReport(){
        cy.visit('https://marsair.recruiting.thoughtworks.net/AlanSouza/report');
    }

    createIssue(criticality){
        cy.get(el.title).type('Test title');
        cy.get(el.description).type('Test description');
        cy.get(el.severity).select(criticality);
        cy.get(el.create).click();
    }

    validateIssue(criticality){
        cy.contains(criticality).should('be.visible')
    }

    // deleteIssue(){
    // cy.get('.issue-action-delete').should('be.visible').then(($el) => {
    //     cy.wrap($el).click();
    //   });
    // cy.contains('The issue has been deleted.').should('be.visible')
    // }
}

export default new Report();