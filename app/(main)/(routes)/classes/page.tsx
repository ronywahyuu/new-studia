import ActionTooltip from "@/components/action-tooltip";
import ClassCard from "@/components/class/class-card";
import DropDownButton from "@/components/dropdown/dropdown-button";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetClasses } from "@/hooks/use-classes";
import { useModalStore } from "@/hooks/use-modal-store";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import axios from "axios";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from "@radix-ui/react-dropdown-menu";
import { Plus } from "lucide-react";
import { cache, use } from "react";

const mockData = {
  title: "Card Title",
  description: "Card Description",
  dueDate: "2021-10-10",
  isComplete: false,
};

const HomePage = async () => {
  const profile = await currentProfile();
  const classes = await db.class.findMany({
    where: {
      owner: profile?.id,
    },
    include: {
      members: {
        include: {
          user: true,
        },
      },
    },
  });

  const classesData = [
    {
      name: "Class 1",
      owner: "Teacher 1",
      subject: "Math",
      code: "ABC123",
      imageUrl: "https://picsum.photos/200",
      members: ["Student 1", "Student 2", "Student 3"],
    },
    {
      name: "Class 2",
      owner: "Teacher 2",
      subject: "Science",
      code: "ABC123",
      imageUrl: "https://picsum.photos/200",
      members: ["Student 1", "Student 2", "Student 3"],
    },
    {
      name: "Class 3",
      owner: "Teacher 3",
      subject: "English",
      code: "ABC123",
      imageUrl: "https://picsum.photos/200",
      members: ["Student 1", "Student 2", "Student 3"],
    },
  ];

  return (
    <>
      <div className="p-10 flex flex-col gap-2">
        <h1 className="text-cyan-950 font-bold text-3xl ">
          Hi, {profile?.name}!
        </h1>
        <p className="text-gray-500 font-medium text-xl">Have a good day!</p>
      </div>

      <div className="px-10 gap-2 flex justify-between items-center">
        <div>
          <h2 className="text-slate-700 font-bold text-xl ">Classes</h2>
          <p className="text-gray-500 font-medium text-lg">
            You have 3 classes
          </p>
        </div>

        <div>
          <DropDownButton />
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Plus
                  size={50}
                  className="cursor-pointer hover:bg-gray-300 rounded-full p-2"
                />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              
              <Button className="w-full">Create Class</Button>
              <Button className="w-full">Join Class</Button>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </div>

      {/* clasess card */}
      <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {classes.map((classData, index) => (
          <ClassCard
            key={index}
            name={classData.name}
            subject={classData.subject}
            classCode={classData.classCode}
            imageUrl={classData.imageUrl}
            owner={classData.owner}
          />
        ))}

      </div>
    </>
  );
};

export default HomePage;
