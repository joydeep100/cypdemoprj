import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { web_url,api_url } from '../../variables/variables.js'
import { home_page_locators } from '../../variables/locators.js'
import '@4tw/cypress-drag-drop'

Given('I go to the home page', () => {
  cy.visit(web_url)
})

Given('I visit the following url {string}',(url) => {
	cy.visit(url);
})

Given('I verify if the {string} page is loaded sucessfully',(label_text) => {
	cy.get(home_page_locators['window_title_txt']).should('contain',label_text);
})

Given('I go to the {string} link',(link_name) => {
	cy.get(home_page_locators['home_page_links']).contains(link_name).click();
	cy.get(home_page_locators['window_title_txt'])
		.should('contain',link_name);
});

Given('I select {string} from the list of items',(item) => {
	cy.get('.ui-selectee').contains(item).click();
});

Given('I check if {string} is selected sucessfully',(item) => {
	cy.get(home_page_locators['selected_item']).should('have.text',item);
});

Given('I drag the item and drop it in the droppable area',() => {
    cy.get('.ui-draggable').dragTo('.ui-droppable')
});

Given('I verify if the item is sucessfully dropped',() => {
	cy.get(home_page_locators['drop_area']).should('contain','Dropped!');
});