import { object, flatten, rest } from 'underscore'
import { api_url } from '../variables/variables.js'

export function readList(data = {}) {
	return flatten(data.rawTable || []);
}

export function readTable(data = {}) {
	return object(rest(data.rawTable || []));
}

export function readMultiTable(data = {}) {
	return (data.hashes() || []);
}

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
