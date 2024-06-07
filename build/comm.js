//home
ScrollTrigger.create({
  animation: gsap.from(".logo_img", {
    y: "50vh",
    scale: 4,
    yPercent: -50,
  }),
  scrub: true,
  trigger: "#about",
  start: "top bottom",
  endTrigger: "#about",
  end: "top center",
  markers: false,
  pin: false,
  pinSpacing: false,
});

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
  .to(".about_text.txt1", { x: "50%", color: "#fff", duration: 3 }, 0.4)
  .to(".about_text.txt3", { x: "50%", duration: 3 }, 0.6)
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
});

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
    markers: true,
  },
});
SectionA.to(".SectionA .kanu_barista_uban_wr", {
  duration: 3,
  x: "13%",
  opacity: 1,
});
SectionA.to(".SectionA .thumb_uban_img", {
  duration: 5,
  x: "-13%",
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

// SectionB.to(".SectionB .thumb_logo_img", { duration: 3, x: "50%" });
