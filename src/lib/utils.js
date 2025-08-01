import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


// Utility function to merge class names.Multiple class names can be passed as arguments, and they will be combined into a single string. If there are conflicting class names, the last one will take precedence.
// This is useful for conditionally applying classes based on props or state.
// For example, you can use it to conditionally apply a class based on a boolean value
// or to combine multiple classes into one string for a component's className prop.
// It helps to avoid class name conflicts and ensures that the final class string is clean and optimized
// for rendering in the DOM.
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}