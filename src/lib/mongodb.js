import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function getCollection(collectionName) {
  await client.connect();
  const db = client.db("notesapp");
  return db.collection(collectionName);
}
