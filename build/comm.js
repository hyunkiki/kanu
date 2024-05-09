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

gsap.timeline({
  scrollTrigger: {
    trigger: ".about_text_wr",
    start: "top 20%",
    end: "90% 100%",
    scrub: 1,
    markers: true,
  },
});
//about02
gsap.registerPlugin(ScrollTrigger);
