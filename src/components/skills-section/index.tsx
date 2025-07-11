import { Section } from "@shared/section";
import { CircleFlag } from "react-circle-flags";
import { CgVercel } from "react-icons/cg";
import { DiFirebase, DiJavascript, DiPhotoshop } from "react-icons/di";

import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaNpm,
  FaPhp,
  FaReact,
  FaSass,
  FaYarn,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiAdobexd, SiIntellijidea, SiWebpack } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

export const SkillsSection = () => {
  return (
    <Section
      title="Skills"
      className="text-[var(--clr-accent)] !bg-[url(/skills.png)] bg-blend-multiply text-center !pb-10"
    >
      <div className="flex flex-col lg:flex-row mb-[4em] !mt-5 justify-center items-center gap-5">
        <div>
          <h3>Technologies</h3>
          <div className="flex flex-row flex-wrap justify-center !mt-2 !text-3xl !gap-2">
            <FaHtml5 />
            <FaCss3 />
            <FaSass />
            <DiJavascript />
            <FaReact />
            <FaNodeJs />
            <RiNextjsFill />
            <TbBrandReactNative />
            <FaPhp />
          </div>
        </div>
        <div>
          <h3>Tools</h3>
          <div className="flex flex-row flex-wrap justify-center !mt-2 gap-2 !text-3xl">
            <VscCode />
            <SiIntellijidea />
            <SiAdobexd />
            <DiPhotoshop />
            <FaNpm />
            <FaYarn />
            <FaGithub />
            <SiWebpack />
            <DiFirebase />
            <CgVercel />
          </div>
        </div>
        <div>
          <h3>Languages</h3>
          <div className="flex flex-row flex-wrap justify-center !mt-2 gap-2">
            <CircleFlag countryCode="pl" className="h-[25px]" />
            <CircleFlag countryCode="uk" className="h-[25px]" />
            <CircleFlag countryCode="kr" className="h-[25px]" />
            <CircleFlag countryCode="jp" className="h-[25px]" />
          </div>
        </div>
        <div>
          <h3>Methods</h3>
          <div className="flex flex-row flex-wrap justify-center !mt-2 gap-2">
            <p>
              BEM, RWD, <b>Mobile first</b>.
            </p>
            <p>
              Following the example of <span>A</span>tomic <span>D</span>esign
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
