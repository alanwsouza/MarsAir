/// <reference types="cypress" />

import Report from "../support/pages/Report";

describe('reports', () => {
  it('create low issue', () => {
    Report.accessReport();
    Report.createIssue('Low');
    Report.validateIssue('Low');
  })
})