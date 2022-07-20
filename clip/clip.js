import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "./clip.css";
import initParams from "./initParams";
import scene1 from "./scenes/scene-1";
import scene2 from "./scenes/scene-2";
import scene3 from "./scenes/scene-3";
import scene4 from "./scenes/scene-4";
import initParamsValidationRules from "./initParamsValidationRules";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "800px",
    height: "450px",
  },
});
// starts at 0 ends at 3000
clip.addIncident(scene1("#scene-1"), 0);
// starts at 3000 ends at 6000
clip.addIncident(scene2("#scene-2"), 3000);
// starts at 6000 ends at 12000
clip.addIncident(scene3("#scene-3"), 6000);
// starts at 12000 ends at 17000
clip.addIncident(scene4("#scene-4"), 12000);
clip.addIncident(scene2("#scene-5"), 17000); //18000
clip.addIncident(scene1("#scene-6", false), 20000); //21000
