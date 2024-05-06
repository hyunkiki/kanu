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

/* about_sec02 이미지 변경 */
