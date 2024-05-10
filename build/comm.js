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
  .to(".about_text.txt1", { x: "50%", opacity: 1, duration: 3 }, 0.4)
  .to(".about_text.txt3", { x: "50%", opacity: 1, duration: 3 }, 0.6)
  .to(".about_text.txt2", { x: "-10%", opacity: 1, duration: 3 }, 0.8);

//about02
gsap.registerPlugin(ScrollTrigger);
