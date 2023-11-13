"use client";

import Link from "next/link";
import { Separator } from "../ui/separator";
import ActionTooltip from "../action-tooltip";
import { SettingsIcon } from "lucide-react";
import { useModalStore } from "@/hooks/use-modal-store";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface ClassDetailNavigationProps {
  classesId: string;
  profile: any;
  classData: any;
}
const ClassDetailNavigation = ({
  classesId,
  profile,
  classData,
}: ClassDetailNavigationProps) => {
  const { onOpen } = useModalStore();
  const pathname = usePathname();

  const teacher = classData.members.find(
    (member: any) => member.role === "TEACHER" && member.user.id === profile.id
  )?.user;

  const isTeacher = teacher?.id === profile.id;

  return (
    <div className="flex h-5 items-center space-x-4 justify-between text-lg px-10 py-5">
      <div className="flex gap-4">
        <div className="hover:bg-gray-200 p-2">
          <Link
            className={cn(
              "text-gray-600 font-medium ",
              pathname === `/classes/${classesId}` &&
                "border-b-4 border-[#037A87] text-[#037A87]"
            )}
            href={`/classes/${classesId}`}
          >
            Forum
          </Link>
        </div>
        <Separator orientation="vertical" />
        <div className="hover:bg-gray-200 p-2">
          <Link
            className={cn(
              "text-gray-600 font-medium",
              pathname === `/classes/${classesId}/classwork` &&
                "border-b-4 border-[#037A87] text-[#037A87]"
            )}
            href={`/classes/${classesId}/classwork`}
          >
            Classwork
          </Link>
        </div>
        <Separator orientation="vertical" />
        {/* <div>People</div> */}
        <div className="hover:bg-gray-200 p-2">
          <Link
            className={cn(
              "text-gray-600 font-medium",
              pathname === `/classes/${classesId}/people` &&
                "border-b-4 border-[#037A87] text-[#037A87]"
            )}
            href={`/classes/${classesId}/people`}
          >
            People
          </Link>
        </div>
      </div>
      {isTeacher && (
        <div
          className="cursor-pointer"
          onClick={() => onOpen("settingClass", { class: classData })}
        >
          <ActionTooltip className="cursor-pointer" label="Settings">
            <SettingsIcon className=" h-5 w-5 text-gray-500" />
          </ActionTooltip>
        </div>
      )}
    </div>
  );
};

export default ClassDetailNavigation;
