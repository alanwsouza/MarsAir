/// <reference types="cypress" />

const el = require('./elements').ELEMENTS;

class Welcome {

    accessWelcome(){
        cy.visit('https://marsair.recruiting.thoughtworks.net/AlanSouza');
    }

    searchTrip(departing, returning, promotionalCode){
        cy.get(el.departing).select(departing);
        cy.get(el.returning).select(returning);
        cy.get(el.promotionalCode).type(promotionalCode);
        cy.contains('Search').click();
    }

    validateTrip(){
        cy.contains('Search Results').should('be.visible')
    }
}

export default new Welcome();