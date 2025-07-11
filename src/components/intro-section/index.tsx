import { Section } from "@src/components/shared/section";
import Image from "next/image";

import selfie from "@public/dev-robert.jpg";

import { CustomButton } from "@src/components/shared/custom-button";

export const IntroSection = () => {
  return (
    <Section
      className={
        "flex justify-center flex-col !mx-auto !my-4 flex-wrap max-w-[450px] !p-2"
      }
    >
      <div className="flex justify-center gap-2 flex-wrap">
        <h1 className="order-1 lg:order-2 text-right mb-[0.25em] !font-[var(--fw-reg)] lg:w-1/2 lg:text-left">
          Hi, I am <strong className="block">Robert Michalski</strong>
        </h1>
        <Image
          className="order-2 lg:order-1 lg:!w-[190px] sm:!w-full !h-auto object-fill shadow-bs"
          src={selfie}
          alt="a picture of me with smile :)"
          width={0}
          height={0}
        />
      </div>
      <p className="font-secondary bg-[var(--clr-primary)]! !py-3 !px-3 text-right font-[var(--ff-secondary)] !mx-auto !mb-2 !text-xl">
        software engineer
      </p>
      <div className="flex justify-center mt-[10px]">
        <CustomButton
          {...{
            content: "About me",
          }}
        />
      </div>
    </Section>
  );
};
