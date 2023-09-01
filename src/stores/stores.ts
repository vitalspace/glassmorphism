import { writable } from "svelte/store";

export const componentType = writable("collections-card");
export const backgroundColor = writable("#64cea5");
export const backgroundType = writable("image");
export const backgroundImage = writable(
  `https://media.gq.com.mx/photos/60cf8f0a33c54bdef67610ee/16:9/w_2560%2Cc_limit/paisaje.jpg`
  );  
  
  export const r = writable(17);
  export const g = writable(25);
  export const b = writable(40);
  export const blur = writable(10);
  export const opacity = writable(0.75);
  export const saturation = writable(100);
  export const linerGradient1 = writable("#5d72b1");
  export const linerGradient2 = writable("#8a5d28");
