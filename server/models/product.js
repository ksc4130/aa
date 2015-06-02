var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    title: {type: String, required: '{PATH} is required'},
    category: {type: String, required: '{PATH} is required'},
    featured: {type: Boolean, required: '{PATH} is required'},
    price: {type: Number, required: '{PATH} is required'},
    quantity: {type: Number, required: '{PATH} is required'},
    tags: {type: [String], required: '{PATH} is required'},
    imgs: {type: [String], required: '{PATH} is required'},
    sold: {type: Boolean, required: '{PATH} is required'},
    refurb: {type: Boolean, required: '{PATH} is required'},
    description: {type: String, required: '{PATH} is required'}
});

var Product = mongoose.model('Product', productSchema);

exports.createDefaultProducts = function () {
    Product.find({}).exec(function (err, docs) {
       if(!docs.length) {
           Product.create({
               title: '36" Hudson Bay',
               category: 'axes',
               featured: true,
               price: 125,
               quantity: 1,
               tags: ['axe', 'hudson bay', '36'],
               imgs: ['/img/products/r1-1.jpg'],
               sold: false,
               refurb: true,
               description: 'One-handed camp axe. Used for light splitting, chopping, driving tent pegs, etc.The pattern is thought to have originated from "Biscayan" in Northern Spain, near France. French traders used this hand axe as a trade tool in their dealings with Native Americans for fur and other commodities in the Hudson Bay area, St. Lawrence River, and other trade routes.'
           });
           Product.create({
               imgs: ['/img/products/r2-1.jpg'],
               title: '36" Connecticut',
               price: 100,
               featured: true,
               category: 'axes',
               quantity: 1,
               sold: false,
               refurb: true,
               tags: ['axe', 'connecticut', '36'],
               description: 'One-handed camp axe. Used for light splitting, chopping, driving tent pegs, etc.The pattern is thought to have originated from "Biscayan" in Northern Spain, near France. French traders used this hand axe as a trade tool in their dealings with Native Americans for fur and other commodities in the Hudson Bay area, St. Lawrence River, and other trade routes.'
           });
           Product.create({
               imgs: ['/img/products/r3-1.jpg'],
               title: '36" Connecticut',
               price: 100,
               featured: true,
               category: 'axes',
               quantity: 1,
               sold: false,
               refurb: true,
               tags: ['axe', 'connecticut', '36'],
               description: 'One-handed camp axe. Used for light splitting, chopping, driving tent pegs, etc.The pattern is thought to have originated from "Biscayan" in Northern Spain, near France. French traders used this hand axe as a trade tool in their dealings with Native Americans for fur and other commodities in the Hudson Bay area, St. Lawrence River, and other trade routes.'
           });
       }
    });
};