// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// }); //header에 메뉴의 a태그를 누르면 해당영역으로 부드럽게 이동하기

//HOME
// ScrollTrigger.create({
//   animation: gsap.from(".logo_img", {
//     y: "50vh",
//     scale: 4,
//     yPercent: -50,
//   }),
//   scrub: true,
//   trigger: "#about",
//   start: "top bottom",
//   endTrigger: "#about",
//   end: "top center",
//   markers: false,
//   pin: false,
//   pinSpacing: false,
// });

//about01
gsap.registerPlugin(ScrollTrigger);
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".about_wrap1",
      start: "top 20%",
      end: "90% 100%",
      scrub: 1,
      // markers: true,
    },
  })
  .to(".about_text.txt1", { x: "30%", color: "#fff", duration: 3 }, 0.4)
  .to(".about_text.txt3", { x: "55%", duration: 3 }, 0.6)
  .to(".about_text.txt2", { x: "-10%", color: "#fff", duration: 3 }, 0.8);

//about02
gsap.registerPlugin(ScrollTrigger);
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".about_wrap2 .about_box2",
      start: "top 70%",
      end: "+=300%",
      scrub: 1,
      markers: false,
    },
  })
  .to(" .about_wrap2 .about_box2 .about_bg_img .black_img", {
    duration: 0.5,
    opacity: 1,
  })
  .to(".about_wrap2 .about_box2 .about2_txt01", 0.5, {
    opacity: "1",
    top: "50%",
    delay: "0.1",
  })
  .to(".about_wrap2 .about_box2 .about2_txt01", 0.5, {
    opacity: "0",
    top: "40%",
    delay: "0.2",
  })
  .to(".about_wrap2 .about_box2 .about2_txt02", 0.5, {
    opacity: "1",
    top: "50%",
    delay: "0.1",
  })
  .to(".about_wrap2 .about_box2 .about2_txt02", 0.5, {
    opacity: "0",
    top: "40%",
    delay: "0.2",
  })
  .to(".about_wrap2 .about_box2 .about2_txt03", 0.5, {
    opacity: "1",
    top: "50%",
  });
gsap.to(".about_wrap2 .about_box2", {
  scrollTrigger: {
    trigger: ".about_wrap2 .about_box2",
    start: "center 50%",
    end: "300% 100%",
    pin: true,
    pinSpacing: false,
    //		  markers:true,
    anticipatePin: "0.3",
    scrub: 0.1,
  },
}); //ABOUT

//kanu_product
gsap.registerPlugin(ScrollTrigger);

// Sections
let sections = gsap.utils.toArray(".horizon_box");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    trigger: ".horizon_wrap",
    pin: true,
    scrub: 0.1,
    //snap: directionalSnap(1 / (sections.length - 1)),
    end: "+=3000",
  },
});

//sectionA
const SectionA = gsap.timeline({
  scrollTrigger: {
    trigger: ".SectionA",
    start: "top 10%",
    end: "center 70%",
    scrub: 1,
    // markers: true,
  },
});

SectionA.to(".SectionA .thumb_logo_img", {
  duration: 3,
  opacity: 1,
  ease: "none",
});

SectionA.to(".SectionA .kanu_barista_uban_wr1", {
  duration: 3,
  x: "13%",
  ease: "none",
  opacity: 1,
});
SectionA.to(".SectionA .kanu_barista_uban_wr2", {
  duration: 3,
  x: "12%",
  ease: "none",
  opacity: 1,
});
SectionA.to(".SectionA .thumb_uban_img", {
  duration: 3,
  x: "-13%",
  ease: "none",
  opacity: 1,
});

//sectionB
const SectionB = gsap.timeline({
  scrollTrigger: {
    trigger: ".SectionB",
    start: "top 10%",
    end: "center 70%",
    scrub: 1,
    containerAnimation: scrollTween,
    // markers: true,
  },
});
SectionB.to(".SectionB .thumb_logo_img", {
  duration: 3,
  opacity: 1,
  ease: "none",
});

SectionB.to(".SectionB .kanu_barista_breez_wr1", {
  duration: 3,
  x: "13%",
  ease: "none",
  opacity: 1,
});
SectionB.to(".SectionB .kanu_barista_breez_wr2", {
  duration: 3,
  x: "12%",
  ease: "none",
  opacity: 1,
});

SectionB.to(".SectionB .thumb_breez_img", {
  duration: 3,
  x: "-13%",
  ease: "none",
  opacity: 1,
});

//sectionC
const SectionC = gsap.timeline({
  scrollTrigger: {
    trigger: ".SectionC",
    start: "top 10%",
    end: "center 70%",
    scrub: 1,
    containerAnimation: scrollTween,
    // markers: true,
  },
});

SectionC.to(".SectionC .thumb_logo_img", {
  duration: 3,
  opacity: 1,
  ease: "none",
});

SectionC.to(".SectionC .kanu_capsule_wr1", {
  duration: 3,
  x: "22.5%",
  ease: "none",
  opacity: 1,
});

SectionC.to(".SectionC .kanu_capsule_wr2", {
  duration: 3,
  x: "-13%",
  ease: "none",
  opacity: 1,
});

SectionC.to(".SectionC .introduce_box", {
  duration: 3,
  ease: "none",
  opacity: 1,
});

//sectionD
const SectionD = gsap.timeline({
  scrollTrigger: {
    trigger: ".SectionD",
    start: "top 10%",
    end: "center 70%",
    scrub: 1,
    containerAnimation: scrollTween,
    // markers: true,
  },
});

SectionD.to(".SectionD .thumb_logo_img", {
  duration: 3,
  opacity: 1,
  ease: "none",
});

SectionD.to(".SectionD .kanu_dolce_capsule_wr1", {
  duration: 3,
  x: "19%",
  ease: "none",
  opacity: 1,
});
SectionD.to(".SectionD .kanu_dolce_capsule_wr2 .kanu_dolce_capsule_box", {
  duration: 3,
  x: "-9.5%",
  ease: "none",
  opacity: 1,
});
SectionD.to(".SectionD .introduce_box", {
  duration: 3,
  ease: "none",
  opacity: 1,
});
