import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import { SearchCommand } from "@/components/search/search-command";
import { UserButton } from "@clerk/nextjs";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-full z-50 flex">
        <aside className="hidden md:flex h-full w-60 bg-white  z-30 flex-col fixed inset-y-0 ">
          <NavigationSidebar />
        </aside>
        <main className="md:pl-60 h-full flex-1 border">{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
