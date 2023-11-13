import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { User } from "@clerk/nextjs/server";
import axios from "axios";

export const useGetClasses = async (userId: string) => {
  // const profile = await currentProfile();
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
};
