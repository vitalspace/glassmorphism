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

}

export { App };
