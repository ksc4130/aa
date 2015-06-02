var mongoose = require('mongoose'),
    user = require('../models/user'),
    product = require('../models/product');

module.exports = function (config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback () {
        console.log('american_axe db opened');
        //user.createDefaultUsers();
        product.createDefaultProducts();
    });
};

