import { auth } from "@clerk/nextjs";
import { db } from "./db";
import { initialProfile } from "./initial-profile";

export const currentProfile = async () => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const profile = await db.users.findUnique({
    where: {
      userId
    },
  });


  return profile;
  //
};
