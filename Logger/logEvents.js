const fs = require('fs');
const { v4: uuid } = require('uuid');
const {format} = require('date-fns');
const path = require('path');
const fsPromises = require('fs').promises;



const logEvent = async (message) =>
 {
    const dateTime = format(new Date(), 'dd-MM-yyyy\tHH:mm:ss');
    const id = uuid();
    const log = `${id}\t${dateTime}\t${message}\n`; 
    console.log(log);

    if(!fs.existsSync(path.join(__dirname,'logs')))
    {
        fs.mkdir(path.join(__dirname,'logs'));
    } 
    else{
            fs.appendFile(path.join(__dirname,'logs', 'eventLogs.txt'),log, err => {
                if(err) throw err
                console.log("Log written...");
            })
        }
}

module.exports = logEvent;