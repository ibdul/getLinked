import { readable } from "svelte/store";

const socials = readable([
  { title: "instagram", link: "#" },
  { title: "x", link: "#" },
  { title: "facebook", link: "#" },
  { title: "linkedIn", link: "#" },
]);
export default socials;
