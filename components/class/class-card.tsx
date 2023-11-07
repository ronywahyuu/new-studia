"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { generateInitials } from "@/lib/utils";

type AssignmentListProps = {
  tasks: string[];
};

const AssignmentList = ({ tasks }: AssignmentListProps) => {
  const [showAll, setShowAll] = useState(false);

  const visibleTasks = showAll ? tasks : tasks.slice(0, 4);

  return (
    <CardContent className="max-h-64 py-5">
      <div>
        <p className="text-gray-500 font-medium mb-2">Assignments:</p>
        <ul className="list-disc pl-4">
          {visibleTasks.map((task, index) => (
            <li key={index} className="mb-1">
              {task} -{/* due date */}
              <span className="text-gray-500"> 2021-10-10</span>
            </li>
          ))}
        </ul>
        {tasks.length > 4 && (
          <button
            className="text-blue-500 hover:underline focus:outline-none"
            // onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </CardContent>
  );
};

const ClassCard = () => {
  const tasks = ["Task 1", "Task 2", "Task 2", "Task 2", "Task 2", "Task 2"];
  const participants = [
    {
      name: "Shad",
      image: "",
    },
    {
      name: "Juan",
      image: "",
    },
    {
      name: "Robert",
      image: "",
    },
    {
      name: "Robert",
      image: "",
    },
    {
      name: "Robert",
      image: "",
    },
  ];

  
  return (
    <Card className="w-full shadow-md rounded-xl ">
      <CardHeader className="text-white rounded-t-xl  bg-[#037A87]">
        <div className="flex justify-between">
          <div className="">
            <CardTitle className="text-2xl font-bold">Class Title</CardTitle>
            <CardDescription className="text-slate-300">
              Teacher Name
            </CardDescription>
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <AssignmentList tasks={tasks} />
      <CardFooter className="bg-gray-100 rounded-b-xl py-0">
        {/* class code */}
        <div className="flex flex-row items-center justify-between w-full  py-3 ">
          <div className="flex flex-col">
            <p className="text-gray-500 font-medium">Class Code</p>
            <p className="text-gray-500">123456</p>
          </div>

          {/* participant's avatar */}
          <div className="flex flex-row items-center">
            {participants.slice(0, 3).map((participant, index) => (
              <Avatar key={index} className="-mx-2">
                <AvatarImage src={participant.image} />
                <AvatarFallback className="bg-cyan-700 text-white">
                  {generateInitials(participant.name)}
                </AvatarFallback>
              </Avatar>
            ))}
            {participants.length > 3 && (
              <Avatar>
                <AvatarFallback className="bg-gray-700 text-white">
                  +{participants.length - 3}
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
    // <div>
    // </div>
  );
};

export default ClassCard;