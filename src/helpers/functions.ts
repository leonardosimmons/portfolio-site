import React from "react";

/**
 * Watches and stores curent user's scroll position
 */
export function storeScrollPosition() {
  document.documentElement.dataset.scroll = window.scrollY.toString();
};


/**
 * Prevents form default action and passes even to given function
 * @param fn - a function that consumes a React.FormEvent
 * @returns 
 */
export const preventDefault = (fn: (e: React.FormEvent) => void) => (e: React.FormEvent): void => {
  e.preventDefault();
  fn(e);
};


/**
 * Consumes input change event and passes to provided function (fn)
 * @param fn 
 * @returns 
 */
export const handleInput = (fn: (i: string | number) => void) => (e: React.ChangeEvent<HTMLInputElement>): void => {
  fn(e.target.value);
};


/**
 * Places a ref on the given input element
 * @param ref 
 * @returns 
 */
export const handleInputRef = (ref: React.MutableRefObject<string | number | undefined>) => (e: React.ChangeEvent<HTMLInputElement>): void => {
  ref.current = e.target.value;
};