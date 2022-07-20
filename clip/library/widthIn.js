import { CSSEffect } from "@donkeyclip/motorcortex";
export const widthIn = (selector, duration, easing = "easeInOutCubic") =>
  new CSSEffect(
    {
      animatedAttrs: {
        width: "65%",
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
