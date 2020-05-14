import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import { requestValidator } from '../../utils/common_utils.js'

Given('I initiate a {string} request with the following data', (req_type,table_data) => {
	requestValidator(req_type,table_data)
});