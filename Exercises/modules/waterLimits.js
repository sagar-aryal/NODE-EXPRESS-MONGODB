// Modules are reuseable piece of codes that can be imported for use in other file

/* 

// Function for converting temperature from celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

// Values of freezing and boiling point of water in celsius
const freezingPointInCelsius = 0;
const boilingPointInCelsius = 100;

// Values of freezing and boiling point of water in fahrenheit
const freezingPointInFahrenheit = celsiusToFahrenheit(freezingPointInCelsius);
const boilingPointInFahrenheit = celsiusToFahrenheit(boilingPointInCelsius);

console.log(freezingPointInFahrenheit, boilingPointInFahrenheit);

 */

const { celsiusToFahrenheit } = require("./converter.js");

const freezingPointInCelsius = 0;
const boilingPointInCelsius = 100;

const freezingPointInFahrenheit = celsiusToFahrenheit(freezingPointInCelsius);
const boilingPointInFahrenheit = celsiusToFahrenheit(boilingPointInCelsius);

console.log(freezingPointInFahrenheit, boilingPointInFahrenheit);
