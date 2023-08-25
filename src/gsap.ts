import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

ScrollTrigger.defaults({
  markers: false,
});

// Initialize variables
let scaleX: number, skewY: number, skewX: number, scaleY: number, translateX: number, translateY: number, opacity: number;
// Function with parmaters to set values based on media query for multiple use returning the values.
function setValues(scaleX?: number, skewY?: number, skewX?: number, scaleY?: number, translateX?: number, translateY?: number, opacity?: number) {
  // only return the values that are not undefined as a number
  if (scaleX !== undefined) {
    return scaleX;
  }
  if (skewY !== undefined) {
    return skewY;
  }
  if (skewX !== undefined) {
    return skewX;
  }
  if (scaleY !== undefined) {
    return scaleY;
  }
  if (translateX !== undefined) {
    return translateX;
  }
  if (translateY !== undefined) {
    return translateY;
  }
  if (opacity !== undefined) {
    return opacity;
  }
}

// GSAP Media Queries
let mm = gsap.matchMedia();
mm.add({ isxs: "(min-width: 0px)", issm: "(min-width: 640px)", ismd: "(min-width: 768px)", islg: "(min-width: 1024px)", isxl: "(min-width: 1280px)", is2xl: "(min-width: 1536px)" }, (context) => {
  let { isxs, issm, ismd, islg, isxl, is2xl } = context.conditions;
  return { isxs, issm, ismd, islg, isxl, is2xl };
});

//! For debugging
// TODO: Remove in production
if (mm.contexts[0].conditions.is2xl) {
  console.log("is2xl");
} else if (mm.contexts[0].conditions.isxl) {
  console.log("isxl");
} else if (mm.contexts[0].conditions.islg) {
  console.log("islg");
} else if (mm.contexts[0].conditions.ismd) {
  console.log("ismd");
} else if (mm.contexts[0].conditions.issm) {
  console.log("issm");
} else if (mm.contexts[0].conditions.isxs) {
  console.log("isxs");
}

// GradientIntro.astro
const gradientTimeline = gsap.timeline({
  defaults: {
    ease: "power3.inOut",
  },
});

const gradientTextTimeline = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "none",
  },
});
gradientTextTimeline
  .set("#introTextColor", {
    text: {
      value: "new king",
    },
  })
  .to(
    "#introTextColor",
    {
      text: {
        value: "champion",
      },
    },
    "+=0.5"
  )
  .to(
    "#introTextColor",
    {
      text: {
        value: "trailblazer",
      },
    },
    "+=0.5"
  )
  .to(
    "#introTextColor",
    {
      text: {
        value: "titan",
      },
    },
    "+=0.5"
  )
  .to(
    "#introTextColor",
    {
      text: {
        value: "crown jewel",
      },
    },
    "+=0.5"
  )
  .to(
    "#introTextColor",
    {
      text: {
        value: "marvel",
      },
    },
    "+=0.5"
  )
  .to(
    "#introTextColor",
    {
      text: {
        value: "powerhouse",
      },
    },
    "+=0.5"
  )
  .to(
    "#introTextColor",
    {
      text: {
        value: "endgame",
      },
    },
    "+=0.5"
  );
gradientTimeline
  .to(
    "#introText",
    {
      scale: 0.5,
      opacity: 0,
      duration: 50,
      ease: "power3.inOut",
    },
    18
  )
  .to(
    "#gradientSection",
    {
      "--gradient-color-progress": "150%",
      duration: 50,
    },
    "+=0.5"
  )
  .to(
    "#introTextGradient",
    {
      scale: 1.5,
      ease: "power3.inOut",
      duration: 50,
    },
    "<"
  );

ScrollTrigger.create({
  trigger: "#gradientSection",
  start: "top center",
  end: "bottom center",
  animation: gradientTimeline,
  onLeave: () => {
    gradientTimeline.pause();
  },
  onEnterBack: () => {
    gradientTimeline.play();
  },
  scrub: 0.3,
  pin: true,
});

ScrollTrigger.create({
  trigger: "#gradientSection",
  start: "top center",
  end: "bottom center",
  animation: gradientTextTimeline,
});

// Interface.astro
const interfaceTimeline = gsap.timeline({
  defaults: {
    opacity: 1,
    duration: 1,
    ease: "power3.inOut",
  },
});

interfaceTimeline
  .to("#DetectionEngineImg", {
    transform: "translate(50%, -100%)",
  })
  .to(
    "#ModDetectionImg",
    {
      transform: "translate(50%, 50%)",
    },
    0
  )
  .to(
    "#MusicImg",
    {
      transform: "translate(-40%, -70%)",
    },
    0
  )
  .to(
    "#ServerImg",
    {
      transform: "translate(0%, -20%)",
    },
    0
  )
  .to(
    "#SmartBarImg",
    {
      transform: "translate(-50%, 400%)",
    },
    0
  );

if (mm.contexts[0].conditions.is2xl || mm.contexts[0].conditions.isxl || mm.contexts[0].conditions.islg) {
  // gallery
  ScrollTrigger.create({
    id: "interface",
    trigger: "#interfaceSection",
    start: `top top`,
    end: "bottom center",
    animation: interfaceTimeline,
    scrub: 0.3,
    pin: true,
  });
}

// Set initial values based on media query
if (mm.contexts[0].conditions.is2xl) {
  // scriptSearchSectionContainer
  gsap.set("#scriptSearchSectionContainer", { scaleX: 2, skewY: 0, skewX: 0, scaleY: 2, translateX: 0, translateY: 0 });
} else if (mm.contexts[0].conditions.isxl) {
  // scriptSearchSectionContainer
  gsap.set("#scriptSearchSectionContainer", { scaleX: 2, skewY: 0, skewX: 0, scaleY: 2, translateX: 0, translateY: 0 });
} else if (mm.contexts[0].conditions.islg) {
  // scriptSearchSectionContainer
  gsap.set("#scriptSearchSectionContainer", { scaleX: 2.5, skewY: 0, skewX: 0, scaleY: 2.5, translateX: 0, translateY: 0 });
} else if (mm.contexts[0].conditions.ismd) {
  // scriptSearchSectionContainer
  gsap.set("#scriptSearchSectionContainer", { scaleX: 3, skewY: 0, skewX: 0, scaleY: 3, translateX: 0, translateY: 0 });
} else if (mm.contexts[0].conditions.issm) {
  // scriptSearchSectionContainer
  gsap.set("#scriptSearchSectionContainer", { scaleX: 3, skewY: 0, skewX: 0, scaleY: 3, translateX: 0, translateY: 0 });
} else if (mm.contexts[0].conditions.isxs) {
  // scriptSearchSectionContainer
  gsap.set("#scriptSearchSectionContainer", { scaleX: 7, skewY: 0, skewX: 0, scaleY: 7, translateX: 0, translateY: 0 });
}

// scriptSearchSectionTextBehind
gsap.set("#scriptSearchSectionTextBehind", { scaleX: 1, skewY: 0, skewX: 0, scaleY: 1, translateX: 0, translateY: 100, opacity: 0 });

let scriptSearchSection = gsap.timeline({ defaults: { duration: 1, ease: "none" } });
// scriptSearchSectionTextBehind
setValues((scaleX = 1), (skewY = 0), (skewX = 0), (scaleY = 1), (translateX = 0), (translateY = 0), (opacity = 1));
scriptSearchSection.to("#scriptSearchSectionTextBehind", { scaleX: scaleX, skewY: skewY, skewX: skewX, scaleY: scaleY, translateX: translateX, translateY: translateY, opacity: opacity }, 0);

// scriptSearchSectionContainer
if (mm.contexts[0].conditions.is2xl) {
  setValues((scaleX = 0.5), (skewY = 0), (skewX = 0), (scaleY = 0.5), (translateX = 0), (translateY = 200));
} else if (mm.contexts[0].conditions.isxl) {
  setValues((scaleX = 0.8), (skewY = 0), (skewX = 0), (scaleY = 0.8), (translateX = 0), (translateY = 250));
} else if (mm.contexts[0].conditions.islg) {
  setValues((scaleX = 0.9), (skewY = 0), (skewX = 0), (scaleY = 0.9), (translateX = 0), (translateY = 250));
} else if (mm.contexts[0].conditions.ismd) {
  setValues((scaleX = 1), (skewY = 0), (skewX = 0), (scaleY = 1), (translateX = 0), (translateY = 300));
} else if (mm.contexts[0].conditions.issm) {
  setValues((scaleX = 0.8), (skewY = 0), (skewX = 0), (scaleY = 0.8), (translateX = 0), (translateY = 200));
} else if (mm.contexts[0].conditions.isxs) {
  setValues((scaleX = 0.7), (skewY = 0), (skewX = 0), (scaleY = 0.7), (translateX = 0), (translateY = 200));
}
scriptSearchSection.to("#scriptSearchSectionContainer", { scaleX: scaleX, skewY: skewY, skewX: skewX, scaleY: scaleY, translateX: translateX, translateY: translateY }, 0);

// scriptSearchSectionTextFront
if (mm.contexts[0].conditions.is2xl) {
  setValues((scaleX = 1), (skewY = 0), (skewX = 0), (scaleY = 1), (translateX = 0), (translateY = 489));
} else if (mm.contexts[0].conditions.isxl) {
  setValues((scaleX = 1), (skewY = 0), (skewX = 0), (scaleY = 1), (translateX = 0), (translateY = 400));
} else if (mm.contexts[0].conditions.islg) {
  setValues((scaleX = 1), (skewY = 0), (skewX = 0), (scaleY = 1), (translateX = 0), (translateY = 300));
} else if (mm.contexts[0].conditions.ismd) {
  setValues((scaleX = 1), (skewY = 0), (skewX = 0), (scaleY = 1), (translateX = 0), (translateY = 250));
} else if (mm.contexts[0].conditions.issm) {
  setValues((scaleX = 1), (skewY = 0), (skewX = 0), (scaleY = 1), (translateX = 0), (translateY = 200));
} else if (mm.contexts[0].conditions.isxs) {
  setValues((scaleX = 1), (skewY = 0), (skewX = 0), (scaleY = 1), (translateX = 0), (translateY = 150));
}
scriptSearchSection.to("#scriptSearchSectionTextFront", { scaleX: scaleX, skewY: skewY, skewX: skewX, scaleY: scaleY, translateX: translateX, translateY: translateY, opacity: 0, duration: 0.5 }, 0);

let video = document.querySelector("#scriptSearchSectionContainer video") as HTMLVideoElement;
let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  },
  {
    threshold: 0.1,
  }
);

observer.observe(video);

ScrollTrigger.create({
  trigger: "#scriptSearchSection",
  start: "top top",
  end: "bottom top",
  animation: scriptSearchSection,
  scrub: 0.3,
  pin: true,
  onEnter: () => {
    video.play();
  },
  anticipatePin: 1,
});

// UndeniablyPro.astro
/* Carrousel animation, scroll the cards from left to right in a loop */
// Make it so that it reaches the end of the window and then goes back to the start and it starts outside the window
if (mm.contexts[0].conditions.is2xl || mm.contexts[0].conditions.isxl || mm.contexts[0].conditions.islg || mm.contexts[0].conditions.ismd) {
  const UndeniablyProTimeline = gsap.timeline({
    defaults: {
      ease: "none",
    },
    autoRemoveChildren: true,
  });

  let cardsAmount = document.querySelectorAll(".undeniablyProCards").length;
  let cardsWidth = 750;

  UndeniablyProTimeline.set(".undeniablyProCards", {
    x: (i) => i * cardsWidth,
    left: -711.11,
    ease: "none",
  });

  UndeniablyProTimeline.to(".undeniablyProCards", {
    duration: 100,
    x: (i) => "+=" + cardsAmount * cardsWidth,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % (cardsAmount * cardsWidth)),
    },
    ease: "none",
    repeat: -1,
  });

  ScrollTrigger.create({
    trigger: "#cardsSection",
    start: "top bottom",
    end: "bottom top",
    animation: UndeniablyProTimeline,
    onLeave: () => {
      UndeniablyProTimeline.pause();
    },
    onEnterBack: () => {
      UndeniablyProTimeline.play();
    },
  });
}

const smartDesignTimeline = gsap.timeline({
  defaults: {
    duration: 0.9,
    ease: "expo.out",
    opacity: 0,
  },
});

let soundNotifyPercent, spamNotifyPercent, modNotifyPercent, soundNotifyXPercent, spamNotifyXPercent, modNotifyXPercent;
if (mm.contexts[0].conditions.is2xl) {
  gsap.set(".notificationBanner", { xPercent: 50, yPercent: 50, left: "50%", opacity: 0 });
  soundNotifyPercent = -110;
  spamNotifyPercent = -50;
  modNotifyPercent = 10;
  soundNotifyXPercent = 0;
  spamNotifyXPercent = -25;
  modNotifyXPercent = 0;
} else if (mm.contexts[0].conditions.isxl) {
  gsap.set(".notificationBanner", { xPercent: 50, bottom: 80, left: "50%", opacity: 0 });
  soundNotifyPercent = -110;
  spamNotifyPercent = -50;
  modNotifyPercent = 10;
  soundNotifyXPercent = 0;
  spamNotifyXPercent = -25;
  modNotifyXPercent = 0;
} else if (mm.contexts[0].conditions.islg) {
  gsap.set(".notificationBanner", { xPercent: 50, yPercent: 50, left: "50%", opacity: 0 });
  soundNotifyPercent = -110;
  spamNotifyPercent = -50;
  modNotifyPercent = 10;
  soundNotifyXPercent = 0;
  spamNotifyXPercent = -25;
  modNotifyXPercent = 0;
}

// 3 notification banners (#soundNotif, #spamNotif, #modNotif) (they have position absolute) in the center of the screen, appearing from the left, staying for 3 seconds and disappearing to the right, looping through them
smartDesignTimeline
  .set("#soundNotif", { yPercent: soundNotifyPercent })
  .set("#spamNotif", { yPercent: spamNotifyPercent })
  .set("#modNotif", { yPercent: modNotifyPercent })

  .to("#soundNotif", {
    xPercent: soundNotifyXPercent,
    opacity: 1,
  })
  .to(
    "#spamNotif",
    {
      xPercent: spamNotifyXPercent,
      opacity: 1,
    },
    "+=0.15"
  )
  .to(
    "#modNotif",
    {
      xPercent: modNotifyXPercent,
      opacity: 1,
    },
    "+=0.15"
  );
if (mm.contexts[0].conditions.is2xl || mm.contexts[0].conditions.isxl || mm.contexts[0].conditions.islg) {
  ScrollTrigger.create({
    id: "smartDesign",
    trigger: "#notificationSection",
    start: () => `+=${document.querySelector("#navBar").clientHeight} center`,
    end: () => "bottom center",
    animation: smartDesignTimeline,
  });
}
