import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function countUp(target: number, duration = 1500): Promise<number[]> {
  return new Promise((resolve) => {
    const steps = 60;
    const values: number[] = [];
    for (let i = 0; i <= steps; i++) {
      values.push(Math.round((target * i) / steps));
    }
    resolve(values);
  });
}
