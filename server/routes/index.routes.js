const express = require('express');
const app = express();
const router = express.Router();

const securityMeasure = function(req, res, next) {
    // check header or url parameters or post parameters for token
    if (req.url !== '/authenticate') {
        const token = req.body.token || req.param('token') || req.headers['x-access-token'];
        // decode token
        if (token) {
            // verifies secret and checks exp
            jwt.verify(token, 'SUP3RS3CRET', function(err, decoded) {			
                if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });		
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;	
                    next();
                }
            });
        } else {
            // if there is no token
            // return an error
            return res.status(403).send({ 
                success: false, 
                message: 'No token provided.'
            });	
        }
    } else next();
};

// Uncomment security measures to apply jwt token security to watchlist end points
router.use('/api/v1/watchlist', /* securityMeasure,*/ require('./watchlist.routes'));


module.exports = router;
