
function checkFieldsWatchlist(req, res, next) {
    const { 
        travelclass,
        traveltype,
        price,
        tcid,
        expirydate
    } = req.body;

    if (travelclass && traveltype && price && tcid && expirydate) {
        next();
    } else {
        res.status(400).json({ message: 'fields are not correct' });
    }
}

module.exports = {
    checkFieldsWatchlist
}