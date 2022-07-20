import { CSSEffect } from "@donkeyclip/motorcortex";
export const fadeIn = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 1,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
