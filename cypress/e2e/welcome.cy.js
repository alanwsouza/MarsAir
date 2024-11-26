/// <reference types="cypress" />

import Welcome from "../support/pages/Welcome";

describe('Welcome page', () => {
  it('search trip', () => {
    Welcome.accessWelcome();
    Welcome.searchTrip('July', 'December', 'AF3-FJK-418');
    Welcome.validateTrip();
  })
})