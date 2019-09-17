// load mocked endpoint
require('./endpoints'); 
var midway = require('testarmada-midway');

midway.start({
	host: 'localhost',
	    mockedDirectory: './mocks', // this can be provided as an absolute path as well.
	    port: 8000,
	    project: 'HelloMidway', //Replace HelloMidway with your project name (without dashes).
	    });