/**
 * 
 */
function format_log(content) {
	return content.time_stamp+";"+
		content.A_unique_identifier+";"+
		content.A_IP+";"+
		content.session_ID+";"+
		content.action+";"+
		content.object_ID+";"+
		content.description+";"+
		content.A_device+";"+
		content.error_code+";"+
		content.time_to_complete+";"+
		content.B_device+";"+
		content.B_unique_identifier+";"+
		content.B_IP+";"

}

function log_content(logger, content) {
	result = format_log(content);

	// log according to content level
	switch(content.level) {
		case "trace":
			logger.trace(result);
			break;
		case "debug":
			logger.debug(result);
			break;
		case "info":
			logger.info(result);
			break;
		case "warn":
			logger.warn(result);
			break;
		case "error":
			logger.error(result);
			break;
		case "fatal":
			logger.fatal(result);
			break;
		default: break;
	}
	return result
}

function log(content) {
	var result = {};
	var log4js = require("log4js");
	log4js.configure({
		appenders: {
			console: {type: 'stdout'},
			file_all: {type: 'file', filename: 'logs/all.log'},
			file_current: {type: 'file', filename: 'logs/'+content.project_name+'.log'}
		},
		categories: {
			default: {appenders: ['console', 'file_all', 'file_current'], level: 'debug'}
		}
	});
	var logger = log4js.getLogger(content.project_name);

	return log_content(logger, content);
}