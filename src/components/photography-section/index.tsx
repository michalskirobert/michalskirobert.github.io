import { Section } from "@shared/section";
import Image from "next/image";

import selfie from "@public/dev-robert.jpg";

import styles from "./styles.module.scss";

export const PhotographySection = () => (
  <Section className={styles.section}>
    <h2 className={styles.title}>Who I am</h2>
    <p className={styles.subtitle}>
      Photographer & developer based out of Warsaw
    </p>
    <article>
      <p>
        A Polish guy, a professional photographer interested in Asian culture
        and cuisine. I've always been interested in programming, that's why I've
        been creating simple layouts for blogs since I was an elementary school
        student Usually those layouts were based on HTML and CSS but I have made
        websites based on FLASH and action-script(which I found on the internet)
        as well. I've gotten used to the self-improve, that's why in my free
        time I've been studying different programming languages. I got back to
        study programming after a long break and I really love to do it.
      </p>
      <p>
        I have been a professional photographer since a long time, but I enjoy
        it more when I can solve a problem by myself in a code as a programmer.
        So I can really get a lot of satisfaction when I do something by myself
        then I can feel the progress I have done. Combining my abilities of
        photography and programming allows me to get a lot of inspiration and
        new ideas especially when I create a new website or a new API.{" "}
      </p>
    </article>
    <Image
      className={styles.img}
      src={selfie}
      alt="Photography"
      width={0}
      height={0}
    />
  </Section>
);
