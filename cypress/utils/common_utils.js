import { object, flatten, rest } from 'underscore'
import { api_url } from '../variables/variables.js'

// function to parse data passed as a list in steps
export function readList(data = {}) {
	return flatten(data.rawTable || []);
}

// function to parse data passed as a table in steps
export function readTable(data = {}) {
	return object(rest(data.rawTable || []));
}

// function to parse data passed as a table with mutliple attributes in steps
export function readMultiTable(data = {}) {
	return (data.hashes() || []);
}

// function to validate Restful API's like GET, POST etc
export function requestValidator(req_type,table_data) {
	const data = readTable(table_data);

	cy.request(req_type,`${api_url}/${data.uri}`,data.req_body={})
		.then((resp) => {
			expect(resp.status).to.eq(parseInt(data.status_code));
	
	if(data.resp_data){
		data.resp_data.split(',').map((item) => {
			const key = item.split(':')[0];
			const val = item.split(':')[1];
			expect(resp.body).to.have.property(key, parseInt(val));
				})
			}
		})
}

