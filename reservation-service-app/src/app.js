const express = require('express');
const bodyParser = require('body-parser');
const { connectProducer } = require('./kafka/producer');
const reservationRoutes = require('./routes/reservation.routes');

const app = express();
app.use(bodyParser.json());

app.use('/api/reservations', reservationRoutes);

const start = async () => {
    await connectProducer();
    app.listen(3000, () => {
        console.log('Reservation Service running on port 3000');
    });
};

start();