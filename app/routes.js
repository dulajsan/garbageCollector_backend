var AuthenticationController = require('./controllers/authentication'),
    WasteController = require('./controllers/wastes'),
    locationController=require('./controllers/location');
    express = require('express'),
    passportService = require('../config/passport'),
    passport = require('passport');

var requireAuth = passport.authenticate('jwt', {session: false}),
    requireLogin = passport.authenticate('local', {session: false});

module.exports = function(app){

    var apiRoutes = express.Router(),
        authRoutes = express.Router(),
        wasteRoutes = express.Router();
        locationRoutes =express.Router();

    // Auth Routes
    apiRoutes.use('/auth', authRoutes);

    authRoutes.post('/register', AuthenticationController.register);
    authRoutes.post('/login', requireLogin, AuthenticationController.login);

    authRoutes.get('/protected', requireAuth, function(req, res){
        res.send({ content: 'Success'});
    });

    // waste Routes
    apiRoutes.use('/wastes', wasteRoutes);

    wasteRoutes.get('/', requireAuth, AuthenticationController.roleAuthorization(['generator']), WasteController.getWastes);
    wasteRoutes.post('/', requireAuth, AuthenticationController.roleAuthorization(['generator']), WasteController.createWaste);
    wasteRoutes.delete('/:waste_id', requireAuth, AuthenticationController.roleAuthorization(['generator']), WasteController.deleteWaste);
    
    
    //location Routes
    
    locationRoutes.post('/location', locationController.updateLocation);
    
    

    // Set up routes
    app.use('/api', apiRoutes);

}
