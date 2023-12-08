"use client";
import React from "react";
import ActionTooltip from "../action-tooltip";
import { MoreVertical, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useModalStore } from "@/hooks/use-modal-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface ClassLinkProps {
  classData?: any
  classId?: string;
  link?: string;
}

const ClassLink = ({ link, classData, classId }: ClassLinkProps) => {
  const { onOpen } = useModalStore();


  // meeting link domain
  const MEETING_LINK_DOMAIN = [
    {
      domain: "https://meet.google.com/",
      icon: "/meet-logo.png",
    },
    {
      domain: "https://zoom.us/",
      icon: "/zoom-logo.png",
    },
    {
      domain: "https://teams.microsoft.com/",
      icon: "/teams-logo.png",
    },
  ];

  // meeting logo mappping
  const mapMeetingLogo = (domain: string) => {
    const logo = MEETING_LINK_DOMAIN.find((item) => item.domain === domain);
    return logo?.icon;
  };

  // meeting name mapping
  const mapMeetingName = (url: string) => {
    const name = MEETING_LINK_DOMAIN.find((item) => item.domain);
  };


  if (!link) {
    return (
      <div
        onClick={() =>
          onOpen("createMeetingLink", {
            classId,
          })
        }
        className="hover:cursor-pointer flex items-center space-x-4 hover:bg-gray-200 rounded-md border p-4"
      >
        <Video />
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">Add Meeting Link</p>
        </div>
      </div>
    );
  }

  return (
    <div className=" flex items-center justify-between space-x-4 hover:bg-gray-200 rounded-md border p-4">
      <Link
        target="_blank"
        rel="norefferer noopener"
        href={link || "https://meet.google.com/"}
        className="flex items-center space-x-4"
      >
        <Image src="/meet-logo.png" width={30} height={30} alt="meet logo" />
        <p className="text-sm font-medium leading-none">Google Meet</p>
      </Link>
      {/* <BellIcon /> */}
      <div>
        <ActionTooltip label="options">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() =>
                  onOpen("createMeetingLink", {
                    type: "edit",
                    class: classData,
                  })
                }
              >
                Edit
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ActionTooltip>
      </div>
    </div>
  );
};

export default ClassLink;
