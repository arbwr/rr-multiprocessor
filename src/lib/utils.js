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