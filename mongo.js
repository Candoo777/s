const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
async function run() {
 try {
 await client.connect();
 const database = client.db('myDatabase');
 const collection = database.collection('myCollection');
 const records = [
 { name: 'Alice', age: 25 },
 { name: 'Bob', age: 30 },
 { name: 'Charlie', age: 35 }
 ];
 const result = await collection.insertMany(records);
 console.log(`${result.insertedCount} records inserted`);
 } finally {
 await client.close();
 }
}
run().catch(console.dir);