var TokenDNS = require('../index.js')
var apiKey = 'yourApiKey';

var tokenDnsClient = new TokenDNS(apiKey)
tokenDnsClient.registerDomain({
		apikey: apiKey,
		action: 'add',
		domain: 'example.com',
		method: 'email',
		email: 'webmaster@example.com',
		billing: 'yearly',
	},function(err, res) {
   console.log(res.status);
});

tokenDnsClient.listDomains({
   apikey: apiKey,
   action: 'list',
}, function(err,res) {
	console.log(res.status);
});

tokenDnsClient.setNotification({
   apikey: apiKey,
   recipient: 'you@example.org',
   provider: 'email',
   action: 'add',
}, function(err,res) {
	console.log(res.status);
});

