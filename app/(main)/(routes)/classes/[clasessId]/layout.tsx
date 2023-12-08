import ActionTooltip from "@/components/action-tooltip";
import ClassDetailNavigation from "@/components/class/class-detail-navigation";
import { Separator } from "@/components/ui/separator";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { SettingsIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ClassIdLayoutProps {
  children: React.ReactNode;
  params: {
    clasessId: string;
  };
}
const ClassIdLayout = async ({ params, children }: ClassIdLayoutProps) => {
  // console.log(params.clasessId);
  const profile = await currentProfile()
  const classData = await db.class.findUnique({
    where: {
      id: params.clasessId,
    },
    include: {
      members: {
        select: {
          role: true,
          user: true,
        },
      },
    },
  });

  return (
    <>
      <ClassDetailNavigation profile={profile} classData={classData} classesId={params.clasessId} />
      <Separator />
      {children}
    </>
  );
};

export default ClassIdLayout;
