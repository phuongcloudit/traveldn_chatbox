const routeConfig = require('../configs/route.config'),
    mailConfig = require('./mail.config');
module.exports = {
    env: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost'
    },
    root: "http://localhost:3000",
    file: {
        models: 'models/*.js',
        controllers: 'controllers/*.js',
        services: 'services/*.js'
    },
    encryption: {
        password: 'vs34X?T7BDj7-PUhYCq5w%w',
        salt: 'B5#9p5WcEPcZSJeSzFm&7Cs'
    },
    routes: routeConfig,
    mail: mailConfig,
    facebook: {
        appToken: 'EAATi2dECieUBANZAD2z8xLXRDnSjYgf2NTnvZCLzT0eIMBc2JzcTV99URSpQbTGRPbkgut8ZBrScvVExk8aWw1OaWsGWHT9AWt8m8JLN8zloVxsVWx7gPZAKTpm2tVRXfikPTDhkO6IR3FZCP1IAvf4s0NGpMRlE8vZAKHoZCZAhdwZDZD',
        appSPToken: 'EAASNT5hh2J8BALKh2TKzr0bRW40U77pUcqABizIKToZAE26mjq3L46i60OBkx3d0YbEMNVUL7ZCqvjMBC6MDE7JRmk7Nw9TMXSZBV8zQk5rrg8pNLW9obNNAxrZBr7RiGQDbvZB5ICONhFZAZAP0Gchv100ZAkaULnOFVG2yptZC8ZCQZDZD',
    },
    spBot: [{
        botName: "DL_bot",
        appId: "0f37d07a-40af-446b-9070-0f5a609b0ea3",
        appPassword: "abhdTAGYG088?znkYA24?~_",
    }],
    botstatedb: {
        host: 'https://gnjprodstate.documents.azure.com:443/',
        masterKey: 'O3JyFNQjMiZ0SHf0EzPNLnSxM0ONgJ04dRcNZkGKiVxeZuOYVWxs4lon1GdAWKd5YUBCx4Pcb0gG3kF8NNLPwA',
        database: 'botdocdb',
        collection: 'botdata'
    },
    google: {
        mapsAPIKey: 'AIzaSyBN3V7T7MRzJQAJA0wr6KKhEEjBTkRkHaM'
    },
    messengerCode: {
        expiresIn: 15000 // minutes //Todo: 15000 minutes for testing, 15 minutes for production
    },
    foodToken: {
        expiresIn: 1440 // minutes = 1 day.
    },
    accessToken: {
        expiresIn: 1440 // minutes = 1 day
    },
    providerToken: {
        expiresIn: 43200 // minutes =  30 days
    },
    adminToken: {
        expiresIn: 1440 // minutes
    },
    botToken: {
        expiresIn: 1440 // minutes
    },
    session: {
        secret: 'B5#9p5WcEPcZSJeSzFm&7Cs',
        cookie: {
            maxAge: 60000
        },
        resave: true,
        saveUninitialized: true
    },
    fcmServer: {
        host: 'https://fcm.googleapis.com/fcm/send',
        authKey: 'key=AAAA1goU9gs:APA91bFlED9bWuwvUFis5loPG-C6btXQGeykSpEleSQ1XIyhlbZhdlnMgua9mCObwjsbxBSRJi-Vy-jQFOSBpcAJ1DcXQe0wzizOACWSTW6lkZbiYrLuIrd1qID4Ork6eMZaX2x1BYp_'
    },
    stage: 'prod',
    apiServer: {
        host: 'https://fsa-server.herokuapp.com'
    },
    staticServer: {
        host: 'http://res.cloudinary.com/fsa-server/image/upload'
    },
    placeBackgroundPhotoSize: {
        width: '1000',
        height: '520'
    },
    isProd: true,
    botName: 'spbot'
};