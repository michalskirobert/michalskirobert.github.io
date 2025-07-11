import { IntroSection } from "@src/components/intro-section";
import { PhotographySection } from "@src/components/photography-section";
import { SkillsSection } from "@src/components/skills-section";

export default function Home() {
  return (
    <>
      <IntroSection />
      <SkillsSection />
      <PhotographySection />
    </>
  );
}
