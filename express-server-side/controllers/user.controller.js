var db = require('../db');
module.exports.postCreate = function(req, res) {
    console.log(req.body);
    // db.get('users').push(req.body).write();
	res.redirect('/users');
};

module.exports.create = function(req, res) {
	res.render('users/create');
};
