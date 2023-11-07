import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { db } from "./db";

export const initialProfile = async () => {
  const user = await currentUser();


  if (!user) {
    return redirectToSignIn();
  }

  const profile = await db.users.findUnique({
    where: {
      userId: user.id,
    },
  });


  if (profile) {
    return profile;
  }

  const newProfile = await db.users.create({
    data: {
      userId: user.id,
      email: user.emailAddresses[0].emailAddress,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,

    },
  });

  return newProfile;
};
