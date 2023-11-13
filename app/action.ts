"use server";
import { db } from "@/lib/db";
import { createClassSchema } from "@/lib/schema";
import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";

export const getClasses = async (userId: any) => {
  try {
    const classes = await db.class.findMany({
      where: {
        members: {
          some: {
            userId,
          },
        },
      },
      include: {
        members: {
          select: {
            role: true,
            user: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });


    return classes;
  } catch (error) {
    console.log(error);
  }
};

export const createClass = async (
  values: z.infer<typeof createClassSchema>
) => {
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
