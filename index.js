const express =require('express');
const redis = require('node-redis')
const rateLimiter = require('express-rate-limit')
const port = process.env.PORT || 4000; 
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json());

const redisClient = redis.crateClient(
    {

    }
)

app.get("/",(req,res)=>{
    res.send("Testing's sake ")
})


app.listen(PORT,()=>{console.log(` listening on port ${PORT}`)})
