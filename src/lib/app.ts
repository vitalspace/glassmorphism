import {
  b,
  backgroundColor,
  backgroundImage,
  blur,
  g,
  opacity,
  r,
  saturation
} from "../stores/stores";

class App {
  constructor() {}

  getBackgroundValue(e: Event) {
    backgroundColor.update((v) => (v = (e.target as HTMLInputElement).value));
  }

  getImageValue(e: Event) {
    backgroundImage.update((v) => (v = (e.target as HTMLInputElement).value));
  }

  getCardBackgroundValue(e: Event) {
    r.update(v => v = parseInt((e.target as HTMLInputElement).value.slice(1, 3), 16));
    g.update(v => v = parseInt((e.target as HTMLInputElement).value.slice(3, 5), 16));
    b.update(v => v = parseInt((e.target as HTMLInputElement).value.slice(5, 7), 16));
  }

  getBlurValue(e: Event) {
    blur.update(v => v = parseInt((e.target as HTMLInputElement).value));
  }

  getOpacityValue(e: Event) {
    opacity.update(v => v = parseFloat((e.target as HTMLInputElement).value));
  }

  getSaturationValue(e: Event) {
    saturation.update(v => v = parseInt((e.target as HTMLInputElement).value));
  }

}

const app = new App();

export { app };

