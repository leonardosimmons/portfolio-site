import { removeWatchScrollPosition, watchScrollPosition } from "./events/scroll-position";


export function events() { 
  watchScrollPosition(); 
};

export function removeEvents() {
  removeWatchScrollPosition();
}