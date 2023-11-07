import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateInitials = (name: string) => {
  const nameSplit = name.split(" ");
  const initials = nameSplit
    .map((name) => name[0])
    .slice(0, 2)
    .join("");

  return initials;
};