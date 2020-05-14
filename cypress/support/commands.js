// Add custom commands

Cypress.Commands.add("drag_drop", {prevSubject: "element"}, (subject, target) => {
  cy.wrap(subject).trigger("dragstart");
  cy.get(target).trigger("drop");
  cy.get(target).trigger("dragend");
});