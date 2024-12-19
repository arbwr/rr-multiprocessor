import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function calculateAWT(processes) {
  return processes.reduce((acc, process) => acc + process.waitingTime, 0) / processes.length;
}

export function calculateATT(processes) {
  return processes.reduce((acc, process) => acc + process.turnaroundTime, 0) / processes.length;
}

export const getColorFromId = (id) => {
  
  const hash = id * 2654435761 % 2 ** 32; 

  const r = (hash & 0xFF) % 200 + 50;
  const g = ((hash >> 8) & 0xFF) % 150 + 50;
  const b = ((hash >> 16) & 0xFF) % 150 + 50;

  // Convert RGB to HEX
  const toHex = (value) => value.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};