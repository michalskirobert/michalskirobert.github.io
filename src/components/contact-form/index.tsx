"use client";
import { useState } from "react";

import { ContactProps } from "@src/components/contact-form/types";
import { useForm } from "react-hook-form";

import { Input } from "../../components/contact-form/Input";
import { Textarea } from "../../components/contact-form/Textarea";
import { CustomButton } from "../shared/custom-button";
import { FaPlane } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validation-schema";
import axios from "axios";

export const ContactForm = () => {
  const [notif, setNotif] = useState("");

  const { control, handleSubmit } = useForm<ContactProps>({
    defaultValues: { email: "", message: "", name: "", subject: "" },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: ContactProps) => {
    try {
      const response = await axios.post<string>("api/send", data);
      setNotif(response.data);
    } catch (error) {
      setNotif("");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <Input
            {...{ control, label: "Name *", name: "name", type: "text" }}
          />
          <Input
            {...{ control, label: "Email *", name: "email", type: "email" }}
          />
        </div>
        <div className="flex gap-2">
          <Input
            {...{
              control,
              label: "Subject *",
              name: "subject",
              type: "text",
            }}
          />
        </div>
        <Textarea
          {...{
            control,
            label: "Content *",
            name: "message",
          }}
        />
      </div>
      <CustomButton {...{ content: "Send", icon: <FaPlane /> }} />
    </form>
  );
};
