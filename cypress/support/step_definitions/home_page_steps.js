import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { home_page_locators } from '../../variables/locators.js'

import { HomePage } from  '../../pages/home_page.js'

Given('I go to the home page', () => {
	const home_page = new HomePage();
	home_page.goToHome();
});

Given('I visit the following url {string}', (url) => {
	const home_page = new HomePage();
	home_page.goToUrl(url);
});

Given('I verify if the {string} page is loaded sucessfully', (label_text) => {
	const home_page = new HomePage();
	home_page.verifyIfPageIsLoaded(label_text);	
});

Given('I go to the {string} link', (link_name) => {
	const home_page = new HomePage();
	home_page.goToLink(link_name);
});

Given('I select {string} from the list of items', (item) => {
	const home_page = new HomePage();
	home_page.selectItemFromList(item);	
});

Given('I check if {string} is selected sucessfully', (item) => {
	const home_page = new HomePage();
	home_page.checkIfItemIsSelected(item);	
});

Given('I drag the item and drop it in the droppable area', () => {
 	const home_page = new HomePage();
	home_page.dragAndDropIteam('.ui-draggable','.ui-droppable');
});

Given('I verify if the item is sucessfully dropped', () => {
	const home_page = new HomePage();
	home_page.checkIfItemIsDroppedSucessfully('Dropped!');
});