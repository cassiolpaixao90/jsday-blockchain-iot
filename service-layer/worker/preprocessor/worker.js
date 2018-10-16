const { randomInRange } = require("../../config/components/utils");
const { rabbitMQ } = require("../stream");
setInterval(
  () => {
    const flowRate = randomInRange(66.12345, 125.99999);
    const data = {
      uuid: "fdf6cbee-1a70-4099-8285-1e300a8a0000",
      message: { flowRate }
    };
    rabbitMQ(data);
  },
  1000,
  0
);
