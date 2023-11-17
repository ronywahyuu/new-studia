import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import { SearchCommand } from "@/components/search/search-command";
import { ThemeToggle } from "@/components/theme-toggle";
import { UserButton } from "@clerk/nextjs";
import { getClasses } from "../action";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { BellIcon } from "lucide-react";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const profile = await currentProfile();
  // const classes = await getClasses(profile?.userId);
  const classes = await db.class.findMany({
    where: {
      members: {
        some: {
          userId: profile?.id,
        },
      },
    },
    include: {
      members: {
        select: {
          role: true,
          user: true,
        },
      },
    },
  });

  return (
    <>
      <div className="h-full z-50 flex">
        <aside className="hidden md:flex h-full w-60 bg-white  z-30 flex-col fixed inset-y-0 ">
          <NavigationSidebar classes={classes} />
        </aside>
        <main className="md:pl-60 h-full flex-1 border">
          <div className=" flex flex-col h-full ">
            <div className=" flex justify-between px-10 py-4 sticky top-0 z-50 bg-gray-50 p mx-auto w-full shadow-sm">
              <SearchCommand classes={classes} />

              <div className="flex items-center gap-2">
                <div className="relative">
                  {/* dot  */}
                  <div className="h-2 w-2 bg-red-500 rounded-full absolute right-1"></div>
                  <BellIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
                </div>
                <ThemeToggle />
                <UserButton />
              </div>
            </div>
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
