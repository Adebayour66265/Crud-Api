const Quote = require('../models/quotes.model');

async function getRandomQoute(req, res, next) {
    let randomQuote;

    try {
        randomQuote = await Quote.getRandomQoute();

    } catch (error) {
        return next(error)
    }
    res.json({
        quotes: randomQuote
    });
};

module.exports = {
    getRandomQoute: getRandomQoute
};