import { MongoClient } from "mongodb";

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.piegrff.mongodb.net/?retryWrites=true&w=majority`

export const connectDatabase = async () => {
  const client = await MongoClient.connect(connectionString);
  return client;
}

export const insertDocument = async (client, collection, document) => {
  const db = client.db(collection); //this is the db
 const insertion =  await db.collection('form').insertOne(document) //this is the table
 return insertion;
}