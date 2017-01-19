require('should');
describe('config', function() {
	it('get Config', function() {
	const config = require('../config');
		config.GITHUB_CLIENT_ID.should.be.exactly('711e1b23af9e4e5be533');
		config.GITHUB_CLIENT_SECRET.should.be.exactly('bf0c3b8306f7929098e33e1444338e23a1282fa');
    config.GITHUB_ORGANISATION.should.be.exactly('ziggurate-v2');
    config.MONGO_URL.should.be.exactly('mongodb://localhost/ziggurate');
    });
});
