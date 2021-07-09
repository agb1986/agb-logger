const chalk = require("chalk");

const __getPrefix = () => {
  const now = new Date();
  const timestamp = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  const currentProcess = process.pid;
  return `[${timestamp}][${currentProcess}] -`;
};

module.exports = class Logger {
  static debug(debugMessageObject) {
    console.debug(chalk.green("DEBUG:"), __getPrefix(), debugMessageObject);
  }

  static info(infoMessageObject) {
    console.info(chalk.green("INFO:"), __getPrefix(), infoMessageObject);
  }

  static warn(warnMessageObject) {
    console.warn(chalk.yellow("WARN:"), __getPrefix(), warnMessageObject);
  }

  static error(errorMessageObject) {
    console.error(chalk.red("ERROR:"), __getPrefix(), errorMessageObject);
  }

  static error(errorMessageObject, err) {
    if (err) {
      console.error(
        chalk.red("ERROR:"),
        __getPrefix(),
        errorMessageObject,
        err.stack
      );
    } else {
      console.error(chalk.red("ERROR:"), __getPrefix(), errorMessageObject);
    }
  }
};
