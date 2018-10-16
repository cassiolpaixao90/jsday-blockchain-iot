const { randomInRange } = require("../../config/components/utils");

setInterval(
  () => {
    const flowRate = randomInRange(66.12345, 125.99999);
    const data = {
      uuid: "fdf6cbee-1a70-4099-8285-1e300a8a0000",
      message: { flowRate }
    };
    console.log("data", data);
  },
  1000,
  0
);
