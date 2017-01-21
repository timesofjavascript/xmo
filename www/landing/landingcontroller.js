
// create a base controller
//var LandingFactory 	= require('factories/landingfactory.js');


function LandingController() {}


LandingController.prototype.loadView = function(req, res, next) {

    res.render('landing/views/login', {title: 'Xmo'});

};

LandingController.prototype.loadRegistration = function(req, res, next) {

    res.render('landing/views/register', {title: 'Xmo'});

};

LandingController.prototype.doRegistration = function(req, res, next) {
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;
    // do proper validations here
    if (name === '') {
        res.render('landing/views/register', {title: 'Errors'});
    } else {
    	console.log('do registration here');
        /*var newUser = new User({
            name: name,
            email: email,
            username: username,
            password: password
        });

        User.createUser(newUser, function(err, user) {
            if (err) {
                throw err;
            }
            console.log(user);
        });

        req.flash('success_msg', 'You are registered and can now login');

        res.redirect('/users/login');*/
    }

};

module.exports = LandingController;
