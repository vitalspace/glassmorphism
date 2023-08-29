import {
  backgroundColor,
  backgroundImage,
  backgroundType,
  r,
  g,
  b,
  blur,
  opacity,
  saturation,
  linerGradient1,
  linerGradient2
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
    // const cardColor = (e.target as HTMLInputElement).value;
    r.update(v => v = parseInt((e.target as HTMLInputElement).value.slice(1, 3), 16));
    g.update(v => v = parseInt((e.target as HTMLInputElement).value.slice(3, 5), 16));
    b.update(v => v = parseInt((e.target as HTMLInputElement).value.slice(5, 7), 16));
  }

  getBlurValue(e: Event) {
    blur.update(v => v = parseInt((e.target as HTMLInputElement).value));
  }

  getOpacityValue(e: Event) {
    opacity.update(v => v = parseInt((e.target as HTMLInputElement).value));
  }

  getSaturationValue(e: Event) {
    saturation.update(v => v = parseInt((e.target as HTMLInputElement).value));
  }
}

const app = new App();

export { app };
