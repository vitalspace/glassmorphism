import { backgroundColor, backgroundImage } from "../stores/stores";

class App {
  r: number = 17;
  g: number = 25;
  b: number = 40;
  blur: number = 10;
  opacity: number = 0.75;
  saturation: number = 100;
  linerGradient1: string = "#5d72b1";
  linerGradient2: string = "#8a5d28";

  constructor() {}

  getBackgroundValue(e: Event) {
    backgroundColor.update((v) => (v = (e.target as HTMLInputElement).value));
  }

  getImageValue(e: Event) {
    backgroundImage.update((v) => (v = (e.target as HTMLInputElement).value));
  }

  getCardBackgroundValue(e: Event) {
    const cardColor = (e.target as HTMLInputElement).value;
    const r = parseInt((e.target as HTMLInputElement).value.slice(1, 3), 16);
    const g = parseInt((e.target as HTMLInputElement).value.slice(3, 5), 16);
    const b = parseInt((e.target as HTMLInputElement).value.slice(5, 7), 16);
  }

  getBlurValue(e: Event) {
    const blur = (e.target as HTMLInputElement).value;
  }

  getOpacityValue(e: Event) {
    const opacity = (e.target as HTMLInputElement).value;
  }

  getSaturationValue(e: Event) {
    const saturation = (e.target as HTMLInputElement).value;
  }
}

const app = new App();

export { app };
