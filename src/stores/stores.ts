import { writable } from "svelte/store";

export const backgroundColor = writable("#64cea5");
export const backgroundType = writable("image");
export const backgroundImage = writable(
  `https://media.gq.com.mx/photos/60cf8f0a33c54bdef67610ee/16:9/w_2560%2Cc_limit/paisaje.jpg`
);
