/* eslint-disable global-require */

"use strict";

const logger = require("winston");
logger.info(`Starting  process`, { pid: process.pid });
require("./worker/preprocessor");
process.on("SIGINT", () => {
  process.exit(1);
});
