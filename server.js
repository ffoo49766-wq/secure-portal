const express = require('express');
const app = express();

function isBot(req) {
    const ua = req.headers['user-agent'] || '';
    const bots = ['googlebot', 'bingbot', 'slurp', 'yandexbot', 'facebookexternalhit', 'headlesschrome', 'phantomjs'];
    return bots.some(bot => ua.toLowerCase().includes(bot));
}

app.get('/', (req, res) => {
    if (isBot(req)) {
        res.send('<h1>Site under maintenance</h1>');
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
