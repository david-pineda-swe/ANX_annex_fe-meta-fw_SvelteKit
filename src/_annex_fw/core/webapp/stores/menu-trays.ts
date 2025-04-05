import { derived, writable } from "svelte/store";

export const selectedMenuTray = writable(''); // ! FOR TOP LEVEL MENU TRAY ACCESS

export const toggleMenuTray = (selectedTray: string): void => {
  // console.log('>> CHECK SELECTED_TRAY:', selectedTray);
  selectedMenuTray.set(selectedTray);
};
