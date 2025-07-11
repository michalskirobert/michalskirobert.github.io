import { Section } from "@shared/section";
import { CircleFlag } from "react-circle-flags";
import { CgVercel } from "react-icons/cg";
import {
  DiDocker,
  DiFirebase,
  DiJavascript,
  DiMongodb,
  DiMysql,
  DiPhotoshop,
  DiPostgresql,
  DiSqllite,
} from "react-icons/di";

import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJenkins,
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
import { Skill } from "./Skill";
import { CiCamera } from "react-icons/ci";

export const SkillsSection = () => {
  return (
    <Section
      title="Skills"
      className="!bg-blend-multiply !bg-[rgb(0,0,0,0.5)] text-[var(--clr-accent)] !bg-[url(/skills.jpg)] text-center !pb-10 !bg-center"
    >
      <div className="flex flex-wrap justify-center items-start !gap-5 !mt-5 !mb-[4em] !px-2">
        <Skill title="Technologies">
          <FaHtml5 />
          <FaCss3 />
          <FaSass />
          <DiJavascript />
          <FaReact />
          <FaNodeJs />
          <RiNextjsFill />
          <TbBrandReactNative />
          <FaPhp />
        </Skill>
        <Skill title="Tools">
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
          <DiMongodb />
          <DiPostgresql />
          <DiSqllite />
          <DiMysql />
          <DiDocker />
          <FaJenkins />
          <CiCamera />
        </Skill>
        <Skill title="Languages">
          <CircleFlag countryCode="pl" className="h-[25px]" />
          <CircleFlag countryCode="uk" className="h-[25px]" />
          <CircleFlag countryCode="kr" className="h-[25px]" />
          <CircleFlag countryCode="jp" className="h-[25px]" />
        </Skill>
        <Skill title="Methods" contentSize="md">
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
