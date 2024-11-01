const { emitReservationCreated } = require('../kafka/producer');

exports.createReservation = async (req, res) => {
    const { userId, parkingSpaceId, startTime, endTime } = req.body;
    const newReservation = { userId, parkingSpaceId, startTime, endTime };

    await emitReservationCreated(newReservation);
    res.status(201).json(newReservation);
};