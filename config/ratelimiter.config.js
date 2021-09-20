const moment = require('moment')
const redis = require('redis');

const redisClient = redis.createClient({
})

const  WINDOW_DURAR = 24; 
const MAX_WIND_REQ = 100; 
const WINDOW_LOG_DUR_IN_HOURS = 1; 

export const limitingConfig = (req,res, next) =>{
    try{
        if(!redisClient){
            console.log(' something went wrong in order for starting redis client')
            process.exit(1);
        }
    }
    redisClient.get(req.ip,function(err,picked){
        if(err) throw err; 
        const currTime = moment();
        if(picked == null){
            let newPick = [];
            let requestLog{
                requestTimeStamp: currentTime.unix(),
                requestCount:1
            }
            newRecord.push(requestLog);
            redisClient.set(req.ip,JSON.stringify(newRecord));
            next();
        }
    })
}