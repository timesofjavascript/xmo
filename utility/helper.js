var express = require
var Utility = function() { };

Utility.prototype.addToPublic = function(app, location) {
	app.use(express.static(location));
}
