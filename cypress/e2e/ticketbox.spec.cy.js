describe("template spec", () => {
  beforeEach(() => cy.visit("index.html"));

  it("Check for the initial state", () => {
    cy.percySnapshot();
  });

  it("Checks for invalid email", () => {
    cy.get("#email").type("dfsilva&email.com");
    cy.percySnapshot();
  });

  it("Enables submission after all mandatory fields are filled", () => {
    cy.get("#first-name").type("Daniel");
    cy.get("#last-name").type("Silva");
    cy.get("#email").type("dfsilva@email.com");
    cy.get("#agree").check();
    cy.percySnapshot();
  });

  it("Update agreement base on full name, tickets quantity and type", () => {
    cy.get("#first-name").type("Daniel");
    cy.get("#last-name").type("Silva");
    cy.get("#ticket-quantity").select("4");
    cy.get("#vip").check();
    cy.percySnapshot();
  });
});
