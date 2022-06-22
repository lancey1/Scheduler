// booking

describe("should book an appointment", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");
    // Visits the root of our web server
    cy.visit("/");
    cy.contains("[data-cy=day]", "Monday");
  });

  it("should book an interview", () => {
    // Clicks on the "Add" button in the second appointment
    cy.get("[alt=Add]").first().click();
    // Enters their name
    cy.get("[data-testid=student-name-input]").type("Lydia Miller-Jones");
    // Chooses an interviewer
    cy.get("[alt='Sylvia Palmer']").click();
    // Clicks the save button
    cy.contains("Save").click();
    // Sees the booked appointment
    cy.contains(
      ".appointment__card--show",
      "Lydia Miller-Jones",
      "Sylvia Palmer"
    );
  });
});


// edit
describe("should edit an appointment", () => {
  it ("should edit an appointment", () => {
    // Force clicks on the edit button rather than waiting for hover
    cy.get("[alt=Edit]").first().click({force: true});
    // clears the input
    cy.get("[data-testid=student-name-input]").clear()
    // enters a new name
    cy.get("[data-testid=student-name-input]").type("Edited Name");
    // chooses an interviewer
    cy.get("[alt='Tori Malcolm']").click();
    // Clicks the save button
    cy.contains("Save").click();
    // Sees the edit to the appointment
    cy.contains(
      ".appointment__card--show",
      "Edited Name",
      "Tori Malcolm"
    );
  })
});

// cancel
describe("should delete an appointment", () => {
  it ("should delete an appointment", () => {
    // Force clicks on the Delete button rather than waiting for hover
    cy.get("[alt=Delete]").first().click({force: true});
    // Clicks the delete button for the existing appointment
    cy.contains("Delete").click();
    // Clicks the confirm button
    cy.contains("Confirm").click();
    // Confirms the deleting of form is present
    cy.contains("Deleting").should("exist");
    // confirms the deleting of form has completed
    cy.contains("Deleting").should("not.exist");
    // Sees that the appointment slot is empty
    cy.contains(".appointment__card--show", "Archie Cohen").should('not.exist');
})
});



