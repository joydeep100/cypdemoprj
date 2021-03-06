import { web_url } from '../variables/variables.js'

import { home_page_locators } from '../variables/locators.js';

export default class HomePage {

	goToUrl(url){
		cy.visit(url);
	}

	goToHomePage(){
		cy.visit(web_url);
	}


	goToLink(link_name){
		cy.get(home_page_locators['home_page_links']).contains(link_name).click();
		cy.get(home_page_locators['window_title_txt'])
			.should('contain',link_name);
	}

	verifyIfPageIsLoaded(label_text){
		cy.get(home_page_locators['window_title_txt'])
			.should('contain',label_text);
	}

	selectItemFromList(item){
		cy.get('.ui-selectee').contains(item).click();
	}

	checkIfItemIsSelected(item){
		cy.get(home_page_locators['selected_item']).should('have.text',item);
	}

	dragAndDropIteam(subject,target){
		cy.get(subject).dragTo(target);
	}

	checkIfItemIsDroppedSucessfully(validation_txt){
		cy.get(home_page_locators['drop_area']).should('contain', validation_txt);
	}
	
}