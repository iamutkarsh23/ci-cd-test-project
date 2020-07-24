const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const bunyan = require('bunyan');

// Imports the Google Cloud client library for Bunyan
const {LoggingBunyan} = require('@google-cloud/logging-bunyan');

// Creates a Bunyan Stackdriver Logging client
const loggingBunyan = new LoggingBunyan({
    logName: 'info_log'
});

// Create a Bunyan logger that streams to Stackdriver Logging
// Logs will be written to: "projects/YOUR_PROJECT_ID/logs/bunyan_log"
const logger = bunyan.createLogger({
  // The JSON payload of the log as it appears in Stackdriver Logging
  // will contain "name": "my-service"
  name: 'my-service',
  streams: [
    // Log to the console at 'info' and above
    // {stream: process.stdout, level: 'info'},
    // And log to Stackdriver Logging, logging at 'info' and above
    loggingBunyan.stream('info'),
  ],
});

const newLoggingBunyan = new LoggingBunyan({
    logName: 'warning_log'
});

const warnlogger = bunyan.createLogger({
    // The JSON payload of the log as it appears in Stackdriver Logging
    // will contain "name": "my-service"
    name: 'warnLogg',
    streams: [
      // Log to the console at 'info' and above
      // {stream: process.stdout, level: 'info'},
      // And log to Stackdriver Logging, logging at 'info' and above
      newLoggingBunyan.stream('info'),
    ],
  });

// Writes some log entries
logger.error('warp nacelles offline');
logger.info('shields at 99%');

exports.helloWorld = functions.https.onRequest((request, response) => {

    warnlogger.warn("first warning")
    logger.info("Hello world called nowww")
 response.send("Hello from Firebase!");
});
