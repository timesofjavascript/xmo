var express = require('express');
var router = express.Router();

var landingController = require('../../www/landing/landingcontroller.js');

var _getViewLoader = function _getViewLoader(Obj, viewMethod) {
    var viewMethodInfo = viewMethod;
    return function(req, res, next) {
        var controller = new Obj();
        if (!viewMethodInfo) {
            viewMethodInfo = 'loadView';
        }
        controller[viewMethodInfo].bind(controller)(req, res, next);
    };
};
var setupRoutes = function setupAgentDirectoryRoutes(app) {

    router.get('/', _getViewLoader(landingController, 'loadView'));
    router.get('/register', _getViewLoader(landingController, 'loadRegistration'));
    router.post('/register', _getViewLoader(landingController, 'doRegistration'));
    app.use('/', router);

};

module.exports = setupRoutes;
