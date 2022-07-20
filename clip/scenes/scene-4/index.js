import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { fadeIn } from "../../library/fadeIn";
import { slideIn } from "../../library/slideIn";
import { slideOut } from "../../library/slideOut";
import { scaleBig } from "../../library/scaleBig";

export default (selector) => {
  const clip = new HTMLClip({
    html,
    css,
    selector,
    containerParams: {
      width: "800px",
      height: "450px",
    },
    initParams: {
      scene4: "@initParams.scene4",
    },
  });

  clip.addIncident(fadeIn(".container", 1), 0);
  clip.addIncident(slideIn(".container,.slide-top", 1000), 0);
  clip.addIncident(scaleBig(".container,.slide-top", 4000, undefined, 1.05), 0);
  clip.addIncident(slideOut(".slide-top", 1000), 4000);

  return clip;
};
