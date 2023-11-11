import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import { SearchCommand } from "@/components/search/search-command";
import { ThemeToggle } from "@/components/theme-toggle";
import { UserButton } from "@clerk/nextjs";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-full z-50 flex">
        <aside className="hidden md:flex h-full w-60 bg-white  z-30 flex-col fixed inset-y-0 ">
          <NavigationSidebar />
        </aside>
        <main className="md:pl-60 h-full flex-1 border">
          <div className=" flex flex-col h-full ">
            <div className=" flex justify-between px-10 py-4 sticky top-0 z-50 bg-gray-50 p mx-auto w-full shadow-sm">
              <SearchCommand />

              <div className="flex">
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
