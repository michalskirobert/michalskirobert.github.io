"use client";
import { useState } from "react";

import { ContactProps } from "@components/contact-form/types";
import { useForm } from "react-hook-form";

import { Input } from "@components/contact-form/Input";
import { Textarea } from "@components/contact-form/Textarea";
import { FaPlane } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validation-schema";
import { toast } from "@lib/toast";

import axios from "axios";
import { DEFAULT_VALUES } from "./utils";
import { API_ENDPOINTS } from "@utils/constants";
import { ContactResponseProps } from "@src/app/api/send/types";
import TextCaptcha from "../shared/captcha";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { control, reset, getValues, trigger } = useForm<ContactProps>({
    mode: "all",
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(validationSchema),
  });

  const handleValidation = async () => await trigger();

  const onSave = async () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });

      const isValid = await trigger();

      if (!isValid) return;

      setIsLoading(true);

      const data = getValues();
      const resp = await axios.post<ContactResponseProps>(
        API_ENDPOINTS.SEND_CONTACT_FORM,
        data
      );
      toast.success(resp.data.message);
      reset(DEFAULT_VALUES);
    } catch (error) {
      console.error("Error sending message:", error);

      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TextCaptcha
      onVerified={onSave}
      validate={handleValidation}
      buttonParams={{
        content: "Send",
        icon: <FaPlane />,
        isLoading,
        type: "button",
      }}
    >
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
    </TextCaptcha>
  );
};

export default ContactForm;
