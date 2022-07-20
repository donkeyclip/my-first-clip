import { CSSEffect } from "@donkeyclip/motorcortex";
export const slideOut = (selector, duration, easing = "easeInOutCubic") =>
  new CSSEffect(
    {
      animatedAttrs: {
        top: "-100%",
      },
    },
    {
      selector,
      duration,
      easing,
      delay: "@stagger(0,100)",
    }
  );
