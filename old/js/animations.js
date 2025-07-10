document.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
  var content = [
    "git push 'dev_rob'",
    "git commit -m 'お疲れ'",
    "dev--robert",
    "--ポーランド男児",
  ];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector("p.name").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 200);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 1000);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    typeWriter(content[i], 0, function () {
      // after callback (and whole text has been animated), start next text
      if (i === content.length - 1) {
        setTimeout(function () {
          StartTextAnimation(0);
        }, 20000);
      } else {
        StartTextAnimation(i + 1);
      }
    });
  }
  // start the text animation
  StartTextAnimation(0);
});

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro-slider", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("header", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo("header nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".intro h1", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".intro p", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".intro__img", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".button__item", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(
  ".intro + section",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "-=1"
);

gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section:not(.intro)");

sections.forEach((section) => {
  gsap.fromTo(
    section.children,
    { y: "+=100", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: section,
        start: "top 20%",
      },
    }
  );
});
