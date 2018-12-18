const {MongoClient , ObjectID}= require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err , db)=>{
if(err){
    return console.log('sorry we cant connect with database')
}
//  console.log('we are connected')
// db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
//     console.log('Todos')
//     console.log(JSON.stringify(docs , undefined , 2))
// },(err)=>{console.log(err)});

db.collection('connected').find().count().then((dd)=>{
console.log(`the count of user is ${dd}`)
},(ee)=>{
console.log(`sorry i find some err in your ${ee}`)
})
 db.close();
})