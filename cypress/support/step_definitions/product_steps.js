import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://mcswiss-web-stage.web.app/'

Given('I login to the application', () => {
  cy.visit(url)
})


Given('I goto {string} under {string} category', (sub_category,category) =>{
	cy.get('div.p-2 .nav-link').contains(category).click()
	cy.get('div.p-2 .nav-link').contains(sub_category).click()

})