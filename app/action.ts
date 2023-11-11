'use server'
import { createClassSchema } from "@/lib/schema";
import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";

export const getClasses = async () => {
  try {
    const res = await fetch("/api/classes");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


export const createClass = async (values: z.infer<typeof createClassSchema>) => {
  try {
    await fetch("/api/classes", {
      method: "POST",
      body: JSON.stringify(values),
    });
    revalidatePath("/classes");
  } catch (error) {
    console.log(error);
  }
};
