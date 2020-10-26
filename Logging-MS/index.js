const express = require('express')
const app = express();
const port = 8080;

// component imports
import { process_request } from './components/process_request.js';
import { send_response } from './components/send_response.js';
import { log } from './components/log.js'

/* Fires when client accesses via link */
app.get('/', (req, res) => {
	log_content = process_request(req);
	log_feedback = log(log_content)
	res.send(log(log_feedback))
});

app.listen(port, () => {
	console.log(`Logging app listening on port ${port}!`)
});