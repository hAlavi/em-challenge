let watchlist = require('../data/watchlist.store');
const filename = './data/watchlist.data.json';
const helper = require('../helpers/helper.js');

function getFares() {
    return new Promise((resolve, reject) => {
        if (watchlist.data.length === 0) {
            reject({
                message: 'no fares available',
                status: 202
            });
        }

        resolve(watchlist.data);
    })
}

function insertFare(newFare) {
    return new Promise((resolve, reject) => {
        if (!helper.isExists(watchlist.data, newFare)) {
            watchlist.data.push(newFare);
            resolve(watchlist.data);
        } else reject({ message: 'Fare has been already added!' });
    });
}

function deleteFare(fare) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(watchlist.data, fare)
        .then(() => {
            watchlist.data = watchlist.data.filter(f => !helper.compareFares(f, fare));
            resolve();
        })
        .catch(err => reject(err));
    })
}

module.exports = {
    insertFare,
    getFares,
    deleteFare
};