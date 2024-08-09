import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request) {
  console.log(request);
  const body = await request.json();
  console.log(body);
  const { name, email, message } = body;
  console.log(name, email, message);
  try {
    const response = await resend.emails.send({
      from: `${email}`,
      to: "campbellstubblebine@gmail.com",
      subject: `New message from ${name}`,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
};