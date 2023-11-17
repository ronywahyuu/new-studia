import ActionTooltip from "@/components/action-tooltip";
import ClassCard from "@/components/class/class-card";
import ClassLink from "@/components/class/class-link";
import ClassPost from "@/components/class/class-post";
import Editor from "@/components/text-editor/editor";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { db } from "@/lib/db";
import { cn, formatMemberNameToCapital } from "@/lib/utils";
import { BellIcon, CheckIcon, MoreVertical, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ClasessIdPageProps {
  params: {
    clasessId: string;
  };
}
const ClasessIdPage = async ({ params }: ClasessIdPageProps) => {
  const classData = await db.class.findUnique({
    where: {
      id: params.clasessId,
    },
    include: {
      classPosts: {
        include: {
          user: true,
        },
      },
      members: {
        select: {
          role: true,
          user: true,
        },
      },
    },
  });

  const classPosts = classData?.classPosts;

  const teacherName = classData?.members.find(
    (member) => member.role === "TEACHER"
  )?.user?.name;

  return (
    <div className="w-full md:w-5/6 px-16 py-5 mx-auto">
      <Card className="w-full shadow-md rounded-xl ">
        <CardHeader className="text-white rounded-t-xl  bg-[#037A87]">
          <div className="flex justify-between">
            <div className="h-32 relative">
              <CardTitle className="text-2xl font-bold  ">
                {classData?.name}
              </CardTitle>
              <CardDescription className="text-slate-300 ">
                {formatMemberNameToCapital(teacherName as string)}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="bg-gray-100 rounded-b-xl py-0">
          {/* class code */}
          <div className="flex flex-row items-center justify-between w-full  py-3 ">
            <div className="flex flex-col">
              <p className="text-gray-500 font-medium">Subject</p>
              <p className="text-gray-500">{classData?.subject}</p>
            </div>

            {/* participant's avatar */}
          </div>
        </CardFooter>
      </Card>

      {/* rich text editor */}
      <div className="pt-10">
        {/* <h2 className="text-xl font-medium text-gray-800">
          Announce Something to your class
        </h2> */}
        <Editor classData={classData} />

        {/* comment list  */}
        <div></div>
      </div>

      {/* content / assignment list */}
      <div className="mt-10 flex gap-9">
        <div className="space-y-5">
          {/* meet link card */}
          <Card className={cn("w-[300px]")}>
            <CardHeader>
              <CardTitle>Link Meet</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <ClassLink link="https://meet.google.com/ivq-igwe-etn?authuser=0&hs=179" />
            </CardContent>
            {/* <CardFooter>
              <Button className="w-full">
                <PlusIcon className="mr-2 h-4 w-4" /> Add Meet Link
              </Button>
            </CardFooter> */}
          </Card>
          {/* assignment list */}
          <Card className={cn("w-[300px]")}>
            <CardHeader>
              <CardTitle>Upcoming Task</CardTitle>
              <CardDescription>You have 3 upcoming task.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className=" flex items-center space-x-4 rounded-md border p-4">
                <BellIcon />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Push Notifications
                  </p>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
                <Switch />
              </div>

              <Separator />

              <Link
                target="_blank"
                rel="norefferer noopener"
                href="https://meet.google.com/ivq-igwe-etn?authuser=0&hs=179"
              >
                <div className=" flex items-center space-x-4 hover:bg-gray-200 rounded-md border p-4">
                  {/* <Image
                    src="/meet-logo.png"
                    width={30}
                    height={30}
                    alt="meet logo"
                  /> */}
                  {/* <BellIcon /> */}
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Page 1-10
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                target="_blank"
                rel="norefferer noopener"
                href="https://meet.google.com/ivq-igwe-etn?authuser=0&hs=179"
              >
                <div className=" flex items-center space-x-4 hover:bg-gray-200 rounded-md border p-4">
                  {/* <Image
                    src="/meet-logo.png"
                    width={30}
                    height={30}
                    alt="meet logo"
                  /> */}
                  {/* <BellIcon /> */}
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Page 1-10
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                target="_blank"
                rel="norefferer noopener"
                href="https://meet.google.com/ivq-igwe-etn?authuser=0&hs=179"
              >
                <div className=" flex items-center space-x-4 hover:bg-gray-200 rounded-md border p-4">
                  {/* <Image
                    src="/meet-logo.png"
                    width={30}
                    height={30}
                    alt="meet logo"
                  /> */}
                  {/* <BellIcon /> */}
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Page 1-10
                    </p>
                  </div>
                </div>
              </Link>
              <div></div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <PlusIcon className="mr-2 h-4 w-4" /> Add Meet Link
              </Button>
            </CardFooter>
          </Card>{" "}
        </div>

        <div className="flex-1">
          {classPosts?.map((classPost) => (
            <ClassPost key={classPost.id} classPost={classPost} />
          ))}
          {/* <ClassPost />
          <ClassPost />
          <ClassPost />
          <ClassPost /> */}
        </div>
      </div>
    </div>
  );
};

export default ClasessIdPage;
