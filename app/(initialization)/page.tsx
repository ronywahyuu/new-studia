import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

type Props = {};

const InitializationPage = async (props: Props) => {
  const createProfile = await initialProfile();

  if (createProfile) {
    return redirect("/home");
  }

  return null;
};

export default InitializationPage;
