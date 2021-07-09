module.exports = class Logger {
    
    static debug(debugMessageObject) {
        console.log(debugMessageObject);
    }

    static info(infoMessageObject) {
        console.log(infoMessageObject);
    }
}