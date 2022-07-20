import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { fadeIn } from "../../library/fadeIn";
import { fadeOut } from "../../library/fadeOut";
import { scaleBig } from "../../library/scaleBig";

export default (selector, addFadeOut = false) => {
  const clip = new HTMLClip({
    html,
    css,
    selector,
    containerParams: {
      width: "800px",
      height: "450px",
    },
    initParams: {
      scene1: "@initParams.scene1",
    },
  });
  clip.addIncident(fadeIn(".container", 1), 0);
  clip.addIncident(scaleBig(".container", 3000), 0);
  if (addFadeOut) clip.addIncident(fadeOut(".container", 1), 3000);
  return clip;
};
