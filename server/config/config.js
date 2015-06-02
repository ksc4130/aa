var path = require('path')
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/aa',
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://ksc4130:meanstack@ds041032.mongolab.com:41032/well_hung_axe_co',
        port: process.env.PORT || 80
    }
};