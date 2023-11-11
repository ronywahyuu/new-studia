import Image from "next/image";
import NavigationItem from "./navigation-item";
import { Calendar, Globe, Home, MoonIcon, SunIcon } from "lucide-react";
import { UserButton, currentUser } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";


const NavigationSidebar = () => {

  return (
    <div className="space-y-9 px-7 flex flex-col h-full relative">
      <Image
        src="/logo-studia.svg"
        alt="Logo Studia"
        height={150}
        width={150}
      />

      {/* Navigation my desk */}
      <div className="">
        <span className="uppercase font-bold text-gray-400">My Desk</span>

        <div className="">
          <NavigationItem title="Home" route="/classes" icon={<Home />} />
        </div>
        <div className="">
          <NavigationItem title="My Schedule" route="/schedules" icon={<Calendar />} />
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

      {/* Navigation settings */}
      <div className="">
        <span className="uppercase font-bold text-gray-400">Settings</span>

        {/* <div className="">
          <Popover>
            <PopoverTrigger>
              <NavigationItem
                title={theme === "light" ? "dark mode" : "light"}
                icon={<MoonIcon />}
              />
            </PopoverTrigger>
            <PopoverContent side="left">
              <div className="flex flex-col gap-3">
                <Button
                  variant="ghost"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  <MoonIcon />
                  <span>
                    Light Mode
                  </span>
                </Button>

                <Button
                  variant="ghost"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  <SunIcon />
                  <span>
                    Dark Mode
                  </span>
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div> */}
        <div className="">
          <NavigationItem title="ID-id" icon={<Globe />} />
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
