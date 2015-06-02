var Product = require('mongoose').model('Product');

exports.getProducts = function (req, res) {
    Product.find({}).exec(function(err, docs) {
        res.send(docs);
    });
};

exports.getProductById = function (req, res) {
    Product.findOne({_id: req.params.id}).exec(function(err, doc) {
        res.send(doc);
    });
};