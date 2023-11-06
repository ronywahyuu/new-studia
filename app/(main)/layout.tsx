import NavigationSidebar from "@/components/navigation/navigation-sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full z-50">
      <div className="border md:flex h-full w-[350px]  z-30 flex-col fixed inset-y-0 ">
        <NavigationSidebar />
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
