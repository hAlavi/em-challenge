const express = require('express');
const app = express();
const router = express.Router();
const watchlist = require('../models/watchlist.model');
const m = require('../helpers/middlewares');
const jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

/* All watchlists */
router.get('/', async (req, res) => {
    await watchlist.getFares()
    .then(fares => res.json(fares))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message });
        } else {
            res.status(500).json({ message: err.message });
        }
    });
});

/* Insert a new fare */
router.post('/', m.checkFieldsWatchlist, async (req, res) => {
    await watchlist.insertFare(req.body)
    .then(fares => res.status(201).json({
        message: `The fare has been added to watchlist`,
        content: fares
    }))
    .catch(err => res.status(400).json({ message: err.message }));
});

/* Delete a fare */
router.delete('/', async (req, res) => {

    await watchlist.deleteFare(req.body)
    .then(fare => res.json({
        message: `The fare has been deleted`
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    });
});

/* Security and authentication */
router.post('/authenticate', function(req, res) {
	// find the user
	if (req.body.password !== 'test' && req.body.username !== 'test') {
		res.json({ success: false, message: 'Authentication failed. User not found.' });
	} else if (req.body.username === 'test') {
		// check if password matches
		if ('test' != req.body.password) {
			res.json({ success: false, message: 'Authentication failed. Wrong password.' });
		} else {
            // if user is found and password is right
            // create a token
            var payload = {
                admin: 'HEREISTHEADMIN'	
            }
            var token = jwt.sign(payload, 'SUP3RS3CRET', {
                expiresIn: 86400 // expires in 24 hours
            });

            res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token
            });
        }		

	}
});

module.exports = router;
