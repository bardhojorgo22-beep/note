// GET route — returns the list of notes
export async function GET() {
  return Response.json({ notes: ["get bread", "get milk", "get bananas"] });
}

// POST route — receives a new note and sends it back
export async function POST(request) {
  const body = await request.json(); // read what the frontend sent
  return Response.json({ note: body.note }); // send the note back
}
