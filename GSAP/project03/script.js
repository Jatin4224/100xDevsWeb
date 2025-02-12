gsap.registerPlugin(ScrollTrigger);

gsap.to("#page2 h1", {
  transform: "translateX(-125%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 2",
    end: "top -100%",
    scrub: 5,
    pin: true,
  },
});
