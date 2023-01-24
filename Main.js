const express = require('express');
const app = express();

app.use((req, res, next) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();

    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
        next();
    } else {
        res.status(503).send('Service Unavailable');
    }
});

app.use((req, res) => {
    res.send('Middleware running during business hours');
});

app.listen(5000, () => {
    console.log('Server running on port 3000');
});