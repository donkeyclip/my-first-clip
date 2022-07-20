import { CSSEffect } from "@donkeyclip/motorcortex";
export const slideIn = (selector, duration, easing = "easeInOutCubic") =>
  new CSSEffect(
    {
      animatedAttrs: {
        top: "0%",
      },
      initialValues: {
        top: "100%",
      },
    },
    {
      selector,
      duration,
      easing,
      delay: "@stagger(0,100)",
    }
  );
