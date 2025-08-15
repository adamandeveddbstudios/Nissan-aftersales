// Banner duration timer start time
var startTime;

// Timeline reference
var tl;
var tl1;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Background Timeline
  tl2 = new TimelineMax({  });

  // Set Global Timeline
  tl1 = new TimelineMax({ onComplete: endTime });

  setRollover();
  animate();
}

function animate() {
  tl1.addLabel("frame1", 0);
  tl1.to("#car", 1,{ x: 0, ease: "power3.out", });
  tl1.to(".gif", 0.5, { autoAlpha: 1, ease: "power1.inOut", }, "frame1+=0.5");
  tl1.addLabel("frame2", 3);
  tl1.to(".gif", 0.5, { autoAlpha: 0, ease: "power1.inOut", }, "frame2");
  tl1.to("#copy", 0.5,{ autoAlpha:1, ease: "power1.inOut", }, "frame2+=0.4");
  tl1.to(["#cta"], 1,{ autoAlpha:1, ease: "power1.out", }, "frame2+=2");
}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}

// CTA grow on hover

function setRollover() {
  document
    .getElementById("bgExit")
    .addEventListener("mouseover", default_over, false);
  document
    .getElementById("bgExit")
    .addEventListener("mouseout", default_out, false);
}

function default_over() {
  gsap.to("#cta", { duration: 0.3, scale: 1.1, ease: "power1.out" });
}

function default_out() {
  gsap.to("#cta", { duration: 0.3, scale: 1, ease: "power1.out" });
}

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
