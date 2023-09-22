import SplitTextJS from "split-text-js";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function () {
  const TARGET_ITEMS = "span, p, h1, h2, h3, h4, h5, a".split(", ");

  const TEXT_SPLIT_TARGETS = ["[data-animate-text]"];

  TARGET_ITEMS.forEach((item) =>
    TEXT_SPLIT_TARGETS.push(`${item}[data-animate-text]`)
  );

  const split_text_targets = document.querySelectorAll(
    TEXT_SPLIT_TARGETS.join(", ")
  );
  split_text_targets.forEach((split_item) => {
    const sub_items = split_item.querySelectorAll([TARGET_ITEMS]);
    sub_items.forEach((sub_item) => {
      new SplitTextJS(sub_item);
    });
    new SplitTextJS(split_item);
  });

  gsap.registerPlugin(ScrollTrigger);

  function createScrollTrigger(trigger, timeline) {
    ScrollTrigger.create({
      trigger: trigger,
      start: "top bottom",
      onLeaveBack: () => {
        timeline.restart();
        timeline.pause();
      },
    });
    ScrollTrigger.create({
      trigger: trigger,
      start: "top 60%",
      onEnter: () => timeline.play(),
    });
  }

  function createSplitTextAnimation(parentSelector) {
    document.querySelectorAll(parentSelector).forEach((parent) => {
      let direction = parent.dataset.animationDirection || "right";
      let child_selector = "";
      let selection = parent.dataset.animationSelection || "words";
      let AMOUNT = 30;
      let directionKey = "xPercent";
      let delay = parent.dataset.animationDelay || 0;

      switch (direction) {
        case "right":
          AMOUNT *= -1;
          break;
        case "up":
          directionKey = "yPercent";
          break;
        case "down":
          directionKey = "yPercent";
          AMOUNT *= -1;
          break;
      }

      switch (selection) {
        case "words":
          child_selector = ".SplitTextJS-wrapper";
          break;
        case "letters":
          child_selector = ".SplitTextJS-char";
          break;
      }

      let tl = gsap.timeline({ paused: true, delay });

      tl.from(parent, {
        opacity: 0,
        [directionKey]: AMOUNT * -1,
      })
      .from(parent.querySelectorAll(child_selector), {
        [directionKey]: AMOUNT,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(2)",
        stagger: { amount: 0.5 },
      });
      if (parent.hasAttribute("data-animation-is-not-scroll-triggered")) {
        tl.play();
      } else {
        createScrollTrigger(parent, tl);
      }
    });
  }
  function createItemAnimation(parentSelector, childSelector = "*") {
    document.querySelectorAll(parentSelector).forEach((parent) => {
      let delay = parent.dataset.animationDelay || 0;
      let tl = gsap.timeline({ paused: true, delay });
      let animation = parent.dataset.animation || "slide";
      let direction = parent.dataset.animationDirection || "right";

      switch (animation) {
        case "pop":
          tl.from(parent, {
            opacity: 0,
            scale: 0,
            rotate: direction == "right" ? -45 : 45,
            ease: "back.out(2)",
          }).to(
            parent,
            {
              autoAlpha: 1,
            },
            "<"
          );
          break;

        default:
          let AMOUNT = 30;
          let directionKey = "xPercent";
          switch (direction) {
            case "right":
              AMOUNT *= -1;
              break;
            case "up":
              directionKey = "yPercent";
              break;
            case "down":
              directionKey = "yPercent";
              AMOUNT *= -1;
              break;
          }
          tl.from(parent, {
            opacity: 0,
            [directionKey]: AMOUNT * -1,
          })
            .to(
              parent,
              {
                autoAlpha: 1,
              },
              "<"
            )
            .from(parent.querySelectorAll(childSelector), {
              [directionKey]: AMOUNT,
              opacity: 0,
              duration: 0.5,
              ease: "back.out(2)",
              stagger: { amount: 0.5 },
            });

          break;
      }
      if (parent.hasAttribute("data-animation-is-not-scroll-triggered")) {
        tl.play();
      } else {
        createScrollTrigger(parent, tl);
      }
    });
  }

  createItemAnimation("[data-animate]");
  createSplitTextAnimation("[data-animate-text]");
}

//   function normalizeIndexToValue(index, listLength, maxValue) {
//     if (listLength <= 1) {
//       return 0;
//     }
//     const normalizedValue = (index / (listLength - 1)) * maxValue;
//     return Math.min(Math.max(normalizedValue, 0), maxValue);
//   }
// const children = parent.querySelectorAll(childSelector);
// children.forEach((child, index) => {
//   tl.from(child, {
//     [directionKey]: AMOUNT,
//     opacity: 0,
//     ease: "back.out(2)",
//     delay: normalizeIndexToValue(index, children.length, 0.5) / 10,
//   });
// });
