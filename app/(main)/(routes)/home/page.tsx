import ClassCard from "@/components/class/class-card";
import CobainCard from "@/components/class/cobain-card";
import { SearchCommand } from "@/components/search/search-command";
import { ThemeToggle } from "@/components/theme-toggle";
import { currentProfile } from "@/lib/current-profile";
import { UserButton } from "@clerk/nextjs";

const mockData = {
  title: "Card Title",
  description: "Card Description",
  dueDate: "2021-10-10",
  isComplete: false,
}

const HomePage = async () => {
  const profile = await currentProfile();

  return (
    <div className=" flex flex-col h-full ">
      <div className=" flex justify-between px-10 py-4 sticky top-0 z-50 bg-gray-50 p mx-auto w-full shadow-sm">
        <SearchCommand />

        <div className="flex">
          <ThemeToggle />
          <UserButton />
        </div>
      </div>
      <div className="p-10 flex flex-col gap-2">
        <h1 className="text-cyan-950 font-bold text-3xl ">
          Hi, {profile?.name}!
        </h1>
        <p className="text-gray-500 font-medium text-xl">Have a good day!</p>
      </div>

      {/* classes */}
      <div className="px-10 flex flex-col gap-2">
        <h2 className="text-slate-700 font-bold text-xl ">
          Classes
        </h2>
        <p className="text-gray-500 font-medium text-lg">You have 3 classes</p>
      </div>


      {/* clasess card */}
      <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* <CobainCard task={mockData}/>
        <CobainCard task={mockData}/>
        <CobainCard task={mockData}/> */}
        <ClassCard/>
        <ClassCard/>
        <ClassCard/>
        <ClassCard/>
        <ClassCard/>
        <ClassCard/>
        <ClassCard/>
      </div>
    </div>
  );
};

export default HomePage;
