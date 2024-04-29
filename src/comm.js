ScrollTrigger.create({
  animation: gsap.from(".logo_img", {
    y: "50vh",
    scale: 2.5,
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
