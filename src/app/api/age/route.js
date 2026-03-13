export async function POST(request) {
  const body = await request.json();
  if (body.age > 19) {
    return Response.json({ message: "you aer adult" });
  } else if (body.age < 18) {
    return Response.json({ message: "you are minor" });
  }
}
