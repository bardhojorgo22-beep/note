import { getCollection } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  const collection = await getCollection("notes");
  const notes = await collection.find({}).toArray();
  return Response.json({ notes });
}

export async function POST(request) {
  const body = await request.json();
  const collection = await getCollection("notes");
  const result = await collection.insertOne({ note: body.note });
  return Response.json({ note: body.note, _id: result.insertedId });
}

export async function DELETE(request) {
  const body = await request.json();
  const collection = await getCollection("notes");
  await collection.deleteOne({ _id: new ObjectId(body.id) });
  return Response.json({ success: true });
}
