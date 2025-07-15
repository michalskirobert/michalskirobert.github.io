"use client";
import { useState } from "react";

import { ContactProps } from "@src/components/contact-form/types";
import { useForm } from "react-hook-form";

import { Input } from "../../components/contact-form/Input";
import { Textarea } from "../../components/contact-form/Textarea";
import { CustomButton } from "@shared/button";
import { FaPlane } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validation-schema";
import axios from "axios";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit } = useForm<ContactProps>({
    mode: "onSubmit",
    defaultValues: { email: "", message: "", name: "", subject: "" },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: ContactProps) => {
    setIsLoading(true);
    try {
      await axios.post<string>("api/send", data);
    } catch (err) {
      console.error("Error sending message:", err);
    } finally {
      setIsLoading(false);
    }
  };

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
