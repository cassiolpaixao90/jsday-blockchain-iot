"use strict";

const logger = require("winston");
const amqp = require("amqplib/callback_api");

const rabbitMQ = data => {
  amqp.connect(
    "amqp://guest:guest@localhost",
    (err, conn) => {
      conn.createChannel((err, ch) => {
        ch.assertQueue("", { exclusive: true }, (err, q) => {
          ch.sendToQueue("waterflow-queues", new Buffer(JSON.stringify(data)), {
            replyTo: q.queue
          });
        });
      });
    }
  );
};

module.exports = { rabbitMQ };
