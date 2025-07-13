import { ContactProps } from "@src/components/contact-form/types";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

function renderTemplate(template: string, data: Record<string, string>) {
  let output = template;
  for (const [key, value] of Object.entries(data)) {
    output = output.replaceAll(`#${key}`, value);
  }
  return output;
}

export const POST = async (req: NextRequest) => {
  try {
    const { email, message, name, subject } =
      (await req.json()) as ContactProps;

    const customerTemplatePath = path.join(
      process.cwd(),
      "src",
      "templates",
      "template_customer.html"
    );
    const receiverTemplatePath = path.join(
      process.cwd(),
      "src",
      "templates",
      "template_receiver.html"
    );

    const customerTemplate = fs.readFileSync(customerTemplatePath, "utf-8");
    const receiverTemplate = fs.readFileSync(receiverTemplatePath, "utf-8");

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
