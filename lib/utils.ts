import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { db } from "./db";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateInitials = (name: string) => {
  const nameSplit = name.split(" ");
  const initials = nameSplit
    .map((name) => name[0])
    .slice(0, 2)
    .join("");

  return initials;
};

export const generateUniqueClassCode =  () => {
  // return Math.random().toString(36).substring(2, 7);
  const code = Math.random().toString(36).substring(2, 7);

  return code

}

// export async function generateUniqueClassCode() {
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let code = "";

//   for (let i = 0; i < 6; i++) {
//     code += characters[Math.floor(Math.random() * characters.length)];
//   }

//   // Check the database to see if the code exists
//   const classWithCode = await db.class.findUnique({
//     where: { classCode: code },
//   });

//   if (classWithCode) {
//     // The code exists, so generate a new code
//     return await generateUniqueClassCode();
//   }

//   return code;
// }
