const redis = require('redis');
const client = redis.createClient(6379,'192.168.31.128');
// Key:value
// client.set('hello',5,function(err,obj){
//     console.log(obj);
// })
// client.get('hello',function(err,data){
//     console.log(data);
// });
client.incr('hello',function(err,data){
    console.log(data);
    // if(data>20){
    //     console.log("error");
    // }
    // console.log(data);
})