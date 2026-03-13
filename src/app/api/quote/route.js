export async function GET() {
  const quotes = [
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "It does not matter how slowly you go as long as you do not stop.",
    "You are never too old to set another goal or to dream a new dream.",
    "The future belongs to those who believe in the beauty of their dreams.",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  return Response.json({ quote: randomQuote });
}
export async function POST(request) {
  const body = await request.json();
  return Response.json({ message: `Keep grinding, ${body.name}` });
}
