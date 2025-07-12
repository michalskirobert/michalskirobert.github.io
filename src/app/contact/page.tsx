import { CustomPage } from "@shared/page";

import { Input } from "./Input";

import test from "@public/robert.jpg";
import { Textarea } from "./Textarea";

export const generateMetadata = async () => {
  return {
    title: "NurByte | Contact me",
    description: "",
  };
};

export default function ContactPage() {
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
      <form>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <Input
              {...{
                label: "Name *",
                name: "name",
                type: "text",
              }}
            />
            <Input
              {...{
                label: "Email *",
                name: "email",
                type: "email",
              }}
            />
          </div>
          <div className="flex gap-2">
            <Input
              {...{
                label: "Subject *",
                name: "subject",
                type: "text",
              }}
            />
          </div>
          <Textarea
            {...{
              label: "Content *",
              name: "message",
            }}
          />
        </div>
      </form>
    </CustomPage>
  );
}
