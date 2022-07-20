import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { fadeIn } from "../../library/fadeIn";
import { widthIn } from "../../library/widthIn";
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
      scene3: "@initParams.scene3",
    },
  });

  clip.addIncident(fadeIn(".container", 1), 0);
  clip.addIncident(scaleBig(".slide-top", 6000), 0);
  clip.addIncident(slideIn(".container, .slide-top", 1000), 0);
  clip.addIncident(widthIn(".width-out", 500), 4000);
  clip.addIncident(slideOut(".slide-top", 1000), 6000);

  return clip;
};
