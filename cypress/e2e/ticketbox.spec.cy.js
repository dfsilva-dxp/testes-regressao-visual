describe("template spec", () => {
  beforeEach(() => cy.visit("index.html"));

  it("Check for the initial state", () => {
    cy.percySnapshot();
  });
});
