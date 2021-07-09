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
export const handleInput = (fn: (i: string | number) => void) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
  fn(e.target.value);
};


/**
 * Consummes input change event and passes to provdided function
 * @param fn 
 * @returns 
 */
export const handleTextArea = (fn: (txt: string) => void) => (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
  fn(e.target.value);
};


/**
 * Places a ref on the given input element
 * @param ref 
 * @returns 
 */
export const handleInputRef = (ref: React.MutableRefObject<string | number | undefined>) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
  ref.current = e.target.value;
};

/**
 * Places a ref on the given input element
 * @param ref 
 * @returns 
 */
export const handleTextAreaRef = (ref: React.MutableRefObject<string | undefined>) => (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
  ref.current = e.target.value;
};