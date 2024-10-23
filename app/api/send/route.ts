import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { feedback } = await req.json();

  if (!resend) {
    console.error("Resend API key set needed.");
    return;
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "info@whiz.hu",
      to: "bakos.soda@gmail.com",
      subject: "Szinezo Keszito feedback",
      text: feedback,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (e) {
    return Response.json({ e }, { status: 500 });
  }
}
