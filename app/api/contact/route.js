import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request) {
  console.log(request);
  const { name, email, message } = JSON.parse(request);

  try {
    const response = await resend.send({
      from: `${name} <${email}>`,
      to: email,
      subject: `New message from ${name}`,
      html: `<p>${message}</p>`,
    });

    res.status(200).json({ success: true, data: response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};