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
const sections = gsap.utils.toArray(".horizon_box");

let maxWidth = 0;

const getMaxWidth = () => {
  maxWidth = 0;
  sections.forEach((section) => {
    maxWidth += section.offsetWidth;
  });
};

getMaxWidth();
ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

gsap.to(sections, {
  x: () => `-${maxWidth - window.innerWidth}`,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizon_wrap",
    pin: true,
    scrub: true,
    // markers: true,
    end: () => `+=${maxWidth}`,
    invalidateOnRefresh: true,
  },
});
