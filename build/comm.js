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
gsap.config({ trialWarn: false });
console.clear();
gsap.registerPlugin(ScrollTrigger, SplitText);
const split = new SplitText(".about_txt01", { type: "lines" });

split.lines.forEach((target) => {
  gsap.to(target, {
    backgroundPositionX: 0,
    ease: "none",
    scrollTrigger: {
      trigger: target,
      markers: false,
      scrub: 1,
      start: "top center",
      end: "bottom center",
    },
  });
});

//about02
gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".about_cont_box2",
      start: "top 100%",
      end: "top 0%",
      scrub: 1,
      markers: true,
    },
  })
  .fromTo(
    ".about_cont_box2 .about_cont_visual01 .about2_image1",
    { width: "100%", height: "100%", xPercent: -10, yPercent: -10 },
    { width: "0%", height: "0%", ease: "none" },
    1.5
  );
