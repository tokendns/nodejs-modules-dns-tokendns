NAME
=============

NodeJS extension for www.tokendns.co API

DESCRIPTION
-------

Manage your DNS records and domains with www.tokendns.co. Get a full API Documentation on https://my.tokendns.co/api/docs/.

Installation
-------

```
git clone https://github.com/tokendns/nodejs-modules-dns-tokendns
```

Example
-------

```
var TokenDNS = require('index.js')
var apiKey = 'YOURAPIKEY';

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
```

AUTHOR
-------

Steffen Wirth <hello@tokendns.co>

COPYRIGHT AND LICENSE
-------

Copyright (C) 2017 by Steffen Wirth

This library is free software; you can redistribute it and/or modify
it under the same terms as Perl itself, either Perl version 5.18.2 or,
at your option, any later version of Perl 5 you may have available.

