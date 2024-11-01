const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'reservation-service',
    brokers: ['localhost:9092'],
});

const producer = kafka.producer();

const connectProducer = async () => {
    await producer.connect();
};

const emitReservationCreated = async (reservation) => {
    await producer.send({
        topic: 'reservation-created',
        messages: [{ value: JSON.stringify(reservation) }],
    });
};

module.exports = { connectProducer, emitReservationCreated };