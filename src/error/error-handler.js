import { OurErrors } from "./err1.js";
import { appendFile, readFileSync } from "fs";

import path, { dirname } from 'path';
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToLog = path.join(__dirname, 'err_log.txt');


const failureMsg = (failure) => {
    
    const date = new Date().toLocaleString("de-DE");
    const failureMessage = `ERROR: "${failure}" TIME: "${date}" \n`;
    appendFile(pathToLog, failureMessage, (error) =>{
        if(error){
            console.log(error);
        } else {
            console.log('\nERROR LOG:', readFileSync("err_log.txt", "utf8"))
        }
    } )
    return failureMessage
}

const error = async(err, req, res, next) => {
    if(err instanceof OurErrors){
        const failure = `STATUSCODE: ${err.statusCode} MESSAGE: ${err.message}`;
        failureMsg(failure);
        res.status(err.statusCode).json({msg: err.message});
    }
    const code = 500;
    const msg = "Ein Fehler ist aufgetreten. Versuchen Sie es nochmal";
    const failure = `STATUSCODE: ${code} MESSAGE: ${msg}`;
    failureMsg(failure);
    res.status(500).json({ msg }); 
}
 
  export default error;





















/* const logger = require("../loggers/logger");
const BaseError = require("./baseError");

function logError(err) {
  console.error(err);
}

function logErrorMiddleware(err, req, res, next) {
  logError(err);
  next(err);
}

function returnError(err, req, res, next) {
  res.status(err.statusCode || 500).send(err.message);
}

function isOperationalError(error) {
  if (error instanceof BaseError) {
    return error.isOperational;
  }
  return false;
}

module.exports = {
  logError,
  logErrorMiddleware,
  returnError,
  isOperationalError,
};
 */