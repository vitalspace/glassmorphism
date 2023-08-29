import {
  backgroundColor,
  backgroundType,
  backgroundImage,
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
    const cardColor = (e.target as HTMLInputElement).value;
    const r = parseInt((e.target as HTMLInputElement).value.slice(1, 3), 16);
    const g = parseInt((e.target as HTMLInputElement).value.slice(3, 5), 16);
    const b = parseInt((e.target as HTMLInputElement).value.slice(5, 7), 16);
  }

  getBlurValue(e: Event) {
    const blur = (e.target as HTMLInputElement).value
  }
}

export { App };
