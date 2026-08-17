import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerScrollTrigger() {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }

  return ScrollTrigger;
}
