"use client";
import { useEffect, useState } from "react";

import { ContactProps } from "@src/components/contact-form/types";
import { useForm } from "react-hook-form";

import { Input } from "../../components/contact-form/Input";
import { Textarea } from "../../components/contact-form/Textarea";
import { CustomButton } from "@shared/button";
import { FaPlane } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validation-schema";
import { toast } from "@lib/toast";

import axios from "axios";
import { DEFAULT_VALUES } from "./utils";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { control, reset, handleSubmit } = useForm<ContactProps>({
    mode: "onSubmit",
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: ContactProps) => {
    setIsLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    try {
      await axios.post<string>("api/send", data);
      toast.success(
        "Thank you for your message! A confirmation email has been sent. I’ll review your message and get back to you as soon as possible."
      );
      reset(DEFAULT_VALUES);
    } catch (err) {
      console.error("Error sending message:", err);
      toast.error(
        "Oops! Something went wrong while sending your message. Please try again later or contact me directly via email."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setInterval(() => {
      toast.success("test");
    }, 5000);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <Input
            {...{
              control,
              label: "Name *",
              name: "name",
              type: "text",
              disabled: isLoading,
            }}
          />
          <Input
            {...{
              control,
              label: "Email *",
              name: "email",
              type: "email",
              disabled: isLoading,
            }}
          />
        </div>
        <div className="flex gap-2">
          <Input
            {...{
              control,
              label: "Subject *",
              name: "subject",
              type: "text",
              disabled: isLoading,
            }}
          />
        </div>
        <Textarea
          {...{
            control,
            label: "Content *",
            name: "message",
            disabled: isLoading,
          }}
        />
      </div>
      <CustomButton {...{ content: "Send", icon: <FaPlane />, isLoading }} />
    </form>
  );
};

export default ContactForm;
