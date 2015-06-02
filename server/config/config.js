var path = require('path')
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/american_axe',
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'dbUser:Lala!!4130@localhost/american_axe',
        port: process.env.PORT || 80
    }
};