import { CSSEffect } from "@donkeyclip/motorcortex";
export const scaleBig = (selector, duration, easing = "linear", scaleX = 1.1) =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform: {
          scaleX,
        },
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
