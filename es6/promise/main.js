const fs = require('fs');
// fs.readFile('./d.txt',function(err,res){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(res.toString());
// })


function readFile(){
    // a
    // b 
    // c
    const aFile = fs.readFileSync('a.txt'); // 同步
    console.log(aFile.toString());
    const bFile = fs.readFileSync('b.txt'); // 同步
    console.log(bFile.toString());
    const cFile = fs.readFileSync('c.txt'); // 同步
    console.log(cFile.toString());

    // 异步
    // fs.readFile('./a.txt',function(err,res){
    //     console.log(res.toString());
    // })
    // fs.readFile('./b.txt',function(err,res){
    //     console.log(res.toString());
    // })
    // fs.readFile('./c.txt',function(err,res){
    //     console.log(res.toString());
    // })
}

readFile();