var midway = require('testarmada-midway'); // Required
midway.id('example'); // Required

// add a route that returns a message "hello world"
midway.route({
	id: 'message',
	    label: 'hello message',
	    path: '/message',
	    method: 'GET',
	    variantLabel: 'hello world',
	    handler: function(req, reply) {
	    reply({message: 'hello world'});
	}
    });

