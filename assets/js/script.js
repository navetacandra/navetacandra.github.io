AOS.init();

gsap.from("section > #about", { duration: 0.6, y: 70, opacity: 0.3 });
gsap.from("#profile-card", { duration: 1.4, rotationY: 105 });

function typeWriter(target, txt, speed) {
  if (txt.length >= 1) {
    target.innerHTML += txt.charAt(0);
    setTimeout(() => typeWriter(target, txt.slice(1), speed), speed);
  }
}

typeWriter(document.querySelector("p#name"), "Naveta Candra", 50);
typeWriter(document.querySelector("p#username"), "navetacandra", 100);
typeWriter(
  document.querySelector("p#work-text"),
  "Student | Full-Stack Developer",
  47.5
);
