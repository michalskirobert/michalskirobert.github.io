import { CustomPage } from "@shared/page";

import test from "@public/robert.jpg";

export const generateMetadata = async () => {
  return {
    title: "NurByte | About me",
    description: "",
  };
};

export default function AboutPage() {
  return (
    <CustomPage
      title="About me"
      subtitle="Robert Michalski - NurByte"
      imageUrl={test}
      fullScreen
      showNav
    >
      <article className="!flex flex-col gap-3">
        <p>
          My name is <strong>Robert Michalski</strong>, and my Arabic name is{" "}
          <strong>Isham Zayd</strong>. I was born in 1994 and I&apos;m married
          to an Indonesian woman.
        </p>
        <p>
          I have around{" "}
          <strong>5 years of professional experience in programming</strong>,
          plus over 5 years as an enthusiast and hobbyist. I truly love coding
          in <strong>TypeScript</strong> with <strong>React / Next.js</strong>,
          and on the mobile side, I enjoy working with{" "}
          <strong>React Native</strong> - React is definitely my favorite
          framework.
        </p>
        <p>
          On the backend, I work primarily with <strong>Node.js</strong> and
          TypeScript, and I personally prefer using <strong>Express.js</strong>{" "}
          as my framework of choice. I don&apos;t like writing code in classes;
          for me, functional approaches are much more clean, readable, and
          elegant. I always focus on{" "}
          <strong>
            optimization, code readability, and high-quality standards.
          </strong>
        </p>
        <p>
          When it comes to databases, I especially enjoy working with{" "}
          <strong>MongoDB</strong> and <strong>PostgreSQL</strong>.
        </p>
        <p>
          I&apos;m deeply passionate about Asia and Asian cuisine. My favorite
          breakfast is <strong>Teh Tarik panas</strong> with{" "}
          <strong>Nasi Lemak</strong> or <strong>Nasi Kuning</strong>, and for
          lunch, I love <strong>Teh Tarik dingin</strong> with{" "}
          <strong>Ayam or Sapi Rendang </strong>— it makes my day feel like
          heaven.
        </p>
        <p>
          I also enjoy cooking. My signature dish is{" "}
          <strong>halal spaghetti alla Carbonara</strong>, as well as other
          Italian dishes, using authentic recipes from Italy, which my friends
          there taught me.
        </p>
        <p>
          In addition to coding and cooking, I can play both the electric and
          acoustic guitar, and I used to compose and write songs in Japanese.
        </p>
        <p>
          Speaking of languages, I can communicate in{" "}
          <strong>Japanese, Korean</strong>, and a bit of{" "}
          <strong>Bahasa Indonesia</strong>.
        </p>
        <p>
          I was also a <strong>professional photographer</strong> for many
          years, specializing in fashion and product photography (packshots).
        </p>
      </article>
    </CustomPage>
  );
}
