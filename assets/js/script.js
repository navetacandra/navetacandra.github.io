AOS.init();

gsap.from("section > #about", { duration: 0.6, y: 70, opacity: 0.3 });
gsap
  .from("#profile-card", { duration: 1.4, rotationY: 105 })
  .to("#profile-card", { duration: 1.4, rotationY: 180 });