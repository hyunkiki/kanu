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

//about
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({
  ignoreMobileResize: true,
});
gsap.to(".about_contents_01 .about_contents_list01 .about_txt_wr .text", {
  scrollTrigger: {
    trigger: ".about_contents_01",
    start: "top 20%",
    end: "200% top",
    //		  markers:true,
    toggleClass: {
      targets: ".about_contents_01 .about_contents_list01 .about_txt_wr .text",
      className: "active",
    },
    toggleActions: "none none none reset",
  },
});
