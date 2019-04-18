function compareFares(fareA, fareB) {
    return (fareA.travelclass === fareB.travelclass &&
        fareA.traveltype === fareB.traveltype &&
        fareA.price === fareB.price &&
        fareA.tcid === fareB.tcid &&
        fareA.expirydate === fareB.expirydate);
}

function mustBeInArray(watchlist, fare) {
    return new Promise((resolve, reject) => {
        const row = watchlist.find(r => compareFares(r, fare));
        if (!row) {
            reject({
                message: 'Fare is not found',
                status: 404
            })
        }
        resolve(row)
    })
}

function isExists(watchlist, fare) {
    const row = watchlist.find(r => compareFares(r, fare));
    if (row) return true;
    return false;
}

module.exports = {
    mustBeInArray,
    isExists,
    compareFares
}