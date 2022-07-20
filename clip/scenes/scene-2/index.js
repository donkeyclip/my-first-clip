import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { fadeIn } from "../../library/fadeIn";
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
      scene2: "@initParams.scene2",
    },
  });
  clip.addIncident(fadeIn(".container", 1), 0);
  clip.addIncident(scaleBig(".container", 3000), 0);
  return clip;
};
