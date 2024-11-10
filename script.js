var tl = gsap.timeline();

tl.from("#chopra", {
  x: -100,
  duration: 0.2,
  opacity: 0,
});

tl.from("#experience", {
  x: -100,
  duration: 0.2,
  opacity: 0,
});

tl.from("#partner", {
  x: -100,
  duration: 0.2,
  opacity: 0,
});

tl.from("#page-one-right img", {
    x: 0,
    scale: 0,
    duration: 0.3,
    opacity: 0,
  });

gsap.from("#page-two", {
  scrollTrigger: {
    trigger: "#page-two",
    start: "top 50%",
    end: "top 30%",
    // markers: true, 
    scrub: 2
  },
  x: 100,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1,
});

gsap.from("#page-two-right img", {
  scrollTrigger: {
    trigger: "#page-two-right",
    start: "top 50%",
    end: "top 30%",
    // markers: true, 
    scrub: 2
  },
  x: 0,
    scale: 0,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1,
});

gsap.from("#page-two-left h2", {
  scrollTrigger: {
    trigger: "#page-two-left",
    start: "top 50%",
    end: "top 30%",
    scrub: 2
  },
  x: 0,
    scale: 0,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1,
});

gsap.from("#page-three #page-three-up", {
  scrollTrigger: {
    trigger: "#page-three",
    start: "top 50%",
    end: "top 30%",
    // markers: true, 
    scrub: 2
  },
  x: 100,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1,
});

gsap.from("#page-three #page-three-down .business-box", {
  scrollTrigger: {
    trigger: "#page-three",
    start: "top 50%",
    end: "top 45%",
    // markers: true, 
    scrub: 1
  },
  y: 0,
    duration: 0.5,
    opacity: 0,
    stagger: 1,
});

gsap.from("#page-four #page-four-left ", {
  scrollTrigger: {
    trigger: "#page-four",
    start: "top 50%",
    end: "top 30%",
    // markers: true, 
    scrub: 2
  },
  x: 100,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1,
});

gsap.from("#page-five #page-five-down .client-box", { 
  scrollTrigger: {
    trigger: "#page-five",
    start: "top 50%",
    end: "top 45%",
    // markers: true, 
    scrub: 1
  },
  y: 0,
    duration: 0.5,
    opacity: 0,
    stagger: 1,
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page-six",
    start: "top 50%",
    end: "top 30%",
    // markers: true, 
    scrub: 2
  }
});

tl2.from("#page-six #page-six-right ", { opacity: 0, 
  x: -100, 
  duration: 1 
}, ); 
  tl2.from("#page-six #page-six-left", { opacity: 0, 
    x: 100, 
    duration: 1
   },);

