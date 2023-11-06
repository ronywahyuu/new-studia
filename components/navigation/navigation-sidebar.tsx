import Image from "next/image";
import React from "react";
import NavigationItem from "./navigation-item";
import { Calendar, Home } from "lucide-react";
import { UserButton, currentUser } from "@clerk/nextjs";

type Props = {};

const NavigationSidebar = async (props: Props) => {
  const user = await currentUser();

  return (
    <div className="space-y-9 px-7 flex flex-col   h-full  relative">
      <Image
        src="/logo-studia.svg"
        alt="Logo Studia"
        height={150}
        width={150}
      />

      {/* Navigation my desk */}
      <div className="">
        <span className="uppercase font-bold text-gray-400">My Desk {user?.username}</span>

        <div className="">
          <NavigationItem title="Home" icon={<Home />} />
        </div>
        <div className="">
          <NavigationItem title="My Schedule" icon={<Calendar />} />
        </div>
      </div>

      {/* Navigation enrolled classes */}
      <div className="">
        <span className="uppercase font-bold text-gray-400">Enrolled</span>

        <div className="">
          <NavigationItem title="Home" icon={<Home />} />
        </div>
        <div className="">
          <NavigationItem title="My Schedule" icon={<Calendar />} />
        </div>
      </div>

      {/* navigation user action */}
      <div className="absolute bottom-9">
        <UserButton />

      </div>
    </div>
  );
};

export default NavigationSidebar;
