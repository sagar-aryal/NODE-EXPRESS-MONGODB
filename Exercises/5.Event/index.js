const events = require("events");

let eventEmitter = new events.EventEmitter();

/* eventEmitter.on("myEvent", (data) => {
  console.log(`Event: ${data}`);
});

eventEmitter.emit("myEvent", "Call emit() method to fire event.");
 */

/* eventEmitter.once("eventOnce", (data) =>
  console.log("Event called once.", data)
);
eventEmitter.emit("eventOnce", "200 OK");
 */
