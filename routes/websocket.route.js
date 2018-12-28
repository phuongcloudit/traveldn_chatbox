const router = require('express').Router(),
    authController = require('../controllers/auth.controller'),
    websocketController = require('../controllers/websocket.controller');

router.post('*', authController.authorizeWebsocketSP);
router.get('*', authController.authorizeWebsocketSP);





//router.get('/testupdate', websocketController.testUpdate);
module.exports = router;