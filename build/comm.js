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
const sections = gsap.utils.toArray(".horizontal_box"); //섹션들을 선택한다 , .horizontal_box 클래스를 가진 모든 요소를 선택하여 배열로 저장한다.

let maxWidth = 0; //최대 너비 계산 변수 초기화한다

const getMaxWidth = () => {
  maxWidth = 0;
  sections.forEach((section) => {
    maxWidth += section.offsetWidth;
  });
}; //최대 너비 계산 함수, 각 섹션의 너비를 합산하여 maxWidth를 계산하는 함수이다.

getMaxWidth(); //최대 너비 초기 계산, 초기 실행 시 최대 너비를 계산한다
ScrollTrigger.addEventListener("refreshInit", getMaxWidth); //새로고침 이벤트에 최대 너비 재계산 추가, ScrollTrigger가 새로고침 이벤트를 발생시킬 때마다 최대 너비를 재계산한다.

gsap.to(sections, {
  x: () => `-${maxWidth - window.innerWidth}`,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal_wr",
    pin: true,
    scrub: true,
    end: () => `+=${maxWidth}`, //+=${maxWidth}는 스크롤 길이를 maxWidth만큼 연장한다.
    invalidateOnRefresh: true,
  },
}); //수평 이동 애니메이션 설정

//horizon1
gsap.registerPlugin(ScrollTrigger);
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".horizontal_wr .horizon_box1",
      start: "top 20%",
      end: "90% 100%",
      scrub: 1,
      markers: false,
    },
  })
  .to(".horizontal_wr .horizon_box1 .thumb_img2", {
    duration: 5,
    y: "-80%",
    delay: 3,
  });
