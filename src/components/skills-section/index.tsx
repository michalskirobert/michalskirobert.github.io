import { Section } from "@shared/section";
import { CircleFlag } from "react-circle-flags";

import { Skill } from "./Skill";
import { languagesFlags, technologiesIcons, toolsIcons } from "./utils";

const renderIcons = (icons: React.ElementType[]) =>
  icons.map((Icon, i) => <Icon key={i} className="text-3xl" />);

export const SkillsSection = () => {
  return (
    <Section
      title="Skills"
      className="!bg-blend-multiply !bg-[rgb(0,0,0,0.5)] text-[var(--clr-accent)] !bg-[url(/assets/skills.jpg)] text-center !pb-10 !bg-center"
    >
      <div className="flex flex-wrap justify-center items-start !gap-5 !mt-5 !mb-[4em] !px-2">
        <Skill title="Technologies">{renderIcons(technologiesIcons)}</Skill>
        <Skill title="Tools">{renderIcons(toolsIcons)}</Skill>
        <Skill title="Languages">
          {languagesFlags.map((code) => (
            <CircleFlag key={code} countryCode={code} className="h-[25px]" />
          ))}
        </Skill>
        <Skill title="Methods">
          <div>
            <p>
              BEM, RWD, <b>Mobile first</b>, <b className="!underline">DRY</b>.
            </p>
            <p>
              Following the example of <span className="!font-bold">A</span>
              tomic
              <span className="!font-bold">D</span>esign.
            </p>
            <p>
              <strong className="!font-bold">Photography</strong>: Supporting
              design with thoughtful, consistent visual storytelling.
            </p>
          </div>
        </Skill>
      </div>
    </Section>
  );
};
