"use strict";

const calculateCost = liters => {
  return liters * 0.00461;
};

const randomInRange = (min, max) => {
  return Math.random() < 0.5
    ? (1 - Math.random()) * (max - min) + min
    : Math.random() * (max - min) + min;
};

module.exports = { calculateCost, randomInRange };
