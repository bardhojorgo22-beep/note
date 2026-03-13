import { response } from "express";

export async function GET() {
  const items = ["apples", "bananas", "milk"];
  return Response.json({ items });
}
