const express =require('express');
const redis = require('node-redis')
const rateLimiter = require('express-rate-limit')
const port = process.env.PORT || 4000; 
const app = express();
const postRoute = require('./routes/posts');

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(rateLimit(
    windowMs: 1 * 60 * 60 *1000,
    max: 5,
    message:' You did exceed the minimal request for unpaid api service',
    headers: true,
))
const redisClient = redis.crateClient(
    {

    }
)
app.use('posts',postRoute);
app.get("/",(req,res)=>{
    res.send("Testing's sake ")
})


app.listen(PORT,()=>{console.log(` listening on port ${PORT}`)})
