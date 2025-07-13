import { ContactProps } from "@src/components/contact-form/types";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { readHtmlTemplate, renderTemplate } from "./helpers";

export const POST = async (req: NextRequest) => {
  try {
    const { email, message, name, subject } =
      (await req.json()) as ContactProps;

    const customerTemplate = readHtmlTemplate("template_customer");
    const receiverTemplate = readHtmlTemplate("template_receiver");

    const templateData = {
      name,
      message,
      email,
      subject,
    };

    const customerHtml = renderTemplate(customerTemplate, templateData);
    const receiverHtml = renderTemplate(receiverTemplate, templateData);

    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_HOST,
      port: 465,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const customerMailOptions = {
      from: `Robert Michalski - NurByte <${process.env.NEXT_PUBLIC_EMAIL}>`,
      to: email,
      replyTo: email,
      subject,
      html: customerHtml,
    };

    const receiverMailOptions = {
      from: email,
      to: process.env.NEXT_PUBLIC_EMAIL,
      replyTo: email,
      subject,
      html: receiverHtml,
    };

    await transporter.sendMail(customerMailOptions);
    await transporter.sendMail(receiverMailOptions);

    return NextResponse.json(
      {
        message:
          "Your message has been sent. You will receive further details by email.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { message: "We were unable to send the email. Please try again later." },
      { status: 500 }
    );
  }
};
