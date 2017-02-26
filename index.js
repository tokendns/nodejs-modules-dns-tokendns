var request = require('request');

/*
constructor function
*/
function TokenDNS(apiKey) {
	this.apiKey = apiKey;
	this.baseUrl = 'https://api.tokendns.co/v1'; //change maybe to static one
}

/**********************************
		DOMAIN HANDLING
		create,delete,list
**********************************/

/**
	register new domain
**/
TokenDNS.prototype.registerDomain = function(paramObject,cb) {
	var paramsUrlString = buildUrlParams(paramObject);

	buildRequest(this.baseUrl + '/domains' + paramsUrlString, cb);
}

/**
	list all domains
**/
TokenDNS.prototype.listDomains = function(paramObject, cb) {
	var paramsUrlString = buildUrlParams(paramObject);

	buildRequest(this.baseUrl + '/domains' + paramsUrlString, cb);
}

/**
	delete Domain
**/
TokenDNS.prototype.deleteDomain = function(paramObject, cb) {
	var paramsUrlString = buildUrlParams(paramObject);

	buildRequest(this.baseUrl + '/domains' + paramsUrlString, cb);
}


/**********************************
		DOMAIN RECORD HANDLING
**********************************/

/**
	create Record
**/
TokenDNS.prototype.createRecord = function(paramObject,cb) {
	var paramsUrlString = buildUrlParams(paramObject);

	buildRequest(this.baseUrl + '/reserve' + paramsUrlString, cb);
}

/**
	update Record
**/
TokenDNS.prototype.updateRecord = function(paramObject,cb) {
	var paramsUrlString = buildUrlParams(paramObject);

	buildRequest(this.baseUrl + '/update' + paramsUrlString, cb);
}

/**
	delete Record
**/
TokenDNS.prototype.deleteRecord = function(paramObject,cb) {
	var paramsUrlString = buildUrlParams(paramObject);

	buildRequest(this.baseUrl + '/delete' + paramsUrlString, cb);
}

/**
	status Record
**/
TokenDNS.prototype.statusRecord = function(paramObject,cb) {
	var paramsUrlString = buildUrlParams(paramObject);

	buildRequest(this.baseUrl + '/status' + paramsUrlString, cb);
}

/**********************************
		TAG HANDLING
**********************************/

/**
	list tags
**/
TokenDNS.prototype.listTags = function(paramObject,cb) {
	var paramsUrlString = buildUrlParams(paramObject);

	buildRequest(this.baseUrl + '/tags' + paramsUrlString, cb);
}

/**********************************
		FAILOVER HANDLING
**********************************/

/**
	create failover
**/
TokenDNS.prototype.createFailover = function(paramObject,cb) {
	var paramsUrlString = buildUrlParams(paramObject);

	buildRequest(this.baseUrl + '/failoverdns' + paramsUrlString, cb);
}

/**
	list failover
**/
TokenDNS.prototype.listFailover = function(paramObject,cb) {
	var paramsUrlString = buildUrlParams(paramObject);

	buildRequest(this.baseUrl + '/failoverdns' + paramsUrlString, cb);
}

/**
	status failover
**/
TokenDNS.prototype.statusFailover = function(paramObject,cb) {
	var paramsUrlString = buildUrlParams(paramObject);

	buildRequest(this.baseUrl + '/failoverdns' + paramsUrlString, cb);
}

/**
	delete failover
**/
TokenDNS.prototype.deleteFailover = function(paramObject,cb) {
	var paramsUrlString = buildUrlParams(paramObject);

	buildRequest(this.baseUrl + '/failoverdns' + paramsUrlString, cb);
}

/**********************************
		NOTIFICATION HANDLING
**********************************/

/**
	add notification
**/
TokenDNS.prototype.setNotification = function(paramObject,cb) {
	var paramsUrlString = buildUrlParams(paramObject);

	buildRequest(this.baseUrl + '/notifications' + paramsUrlString, cb);
}

/**********************************
		SETTINGS HANDLING
**********************************/

/**
	change Settings
**/
TokenDNS.prototype.changeSettings = function(paramObject,cb) {
	var paramsUrlString = buildUrlParams(paramObject);

	buildRequest(this.baseUrl + '/settings' + paramsUrlString, cb);
}

/**********************************
		EXPORT HANDLING
**********************************/

/**
	export Records
**/
TokenDNS.prototype.exportRecords = function(paramObject,cb) {
	var paramsUrlString = buildUrlParams(paramObject);

	buildRequest(this.baseUrl + '/export' + paramsUrlString, cb);
}

// export Object
module.exports = TokenDNS;

/**
	private functions
**/

function buildRequest(url,cb ) {
	var opts = {};

	opts.method = 'GET';
	opts.uri = url;

	// cb will executed in anonymous function
	request(opts,function(err, inMsg, resp) {
		if (err) {

			cb(err, JSON.parse(resp));
			return;
		}

		// execute callback of user
		cb(null, JSON.parse(resp));
	});
}

/**
	paramsObject is an array of  Key Value pairs
**/
function buildUrlParams(paramsObject) {
	var paramString = '?';
	var paramObjectKeys = Object.keys(paramsObject); // returns array of Object keys

	// loop through array of Object keys
	for (var i = 0;i < paramObjectKeys.length; i++) {

		if (paramObjectKeys.length-1 != i) {
			paramString += paramObjectKeys[i] + '=' + paramsObject[paramObjectKeys[i]] + '&';
		}
		else {
			paramString += paramObjectKeys[i] + '=' + paramsObject[paramObjectKeys[i]];	
		}
	}
	return paramString;
}
