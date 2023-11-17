"use client";
import React from "react";
import ActionTooltip from "../action-tooltip";
import { MoreVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ClassLinkProps {
  link?: string;
}

const ClassLink = ({ link }: ClassLinkProps) => {
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
      <div onClick={() => alert("sss")}>
        <ActionTooltip label="options">
          <MoreVertical />
        </ActionTooltip>
      </div>
    </div>
  );
};

export default ClassLink;
