import { CustomPage } from "@shared/page";

import { Input } from "./Input";

import test from "@public/robert.jpg";
import { Textarea } from "./Textarea";
import { useForm } from "react-hook-form";
import { ContactProps } from "./types";

export const generateMetadata = async () => {
  return {
    title: "NurByte | Contact me",
    description: "",
  };
};

export default function ContactPage() {
  const { control, handleSubmit } = useForm<ContactProps>();

  const onSubmit = (data: any) => {
    try {
    } catch (error) {}
  };

  return (
    <CustomPage
      title="Contact me"
      subtitle="Let’s work together!"
      imageUrl={test}
      fullScreen
      showNav
    >
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
      </form>
    </CustomPage>
  );
}
