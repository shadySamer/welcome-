// const MongoClient = require('mongodb').MongoClient ; 
const {MongoClient , ObjectID} = require('mongodb'); 
let obj = new ObjectID()
console.log(obj)
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err , db)=>{
if(err){
   return console.log('erro you can"t read mongo');
    
}
console.log('connected to MongoDb server')
// db.collection('Todos').insertOne({
//     text:"something to do",
//     completed :false
// },(err , data)=>{
// if (err){
//     return console.log('unable to insert to', err)
// }
// console.log("every thing is great"+JSON.stringify(data))
// })
db.collection('connected').insert({
    title:"old brand",
    text:"new brand coming soon"
},(err , data)=>{
    if(err){
        console.log('i got bad err')
    }else{
      //  console.log(data.ops[0]._id.getTimestamp());
    }
})


db.close();
});