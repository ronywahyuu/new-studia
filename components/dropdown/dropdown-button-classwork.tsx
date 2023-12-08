"use client";

import { BookCheck, BookText, Plus } from "lucide-react";
import ActionTooltip from "../action-tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useModalStore } from "@/hooks/use-modal-store";
import { Button } from "../ui/button";

interface DropDownButtonClassworkProps {
  classId: string;
}

const DropDownButtonClasswork = ({ classId }: DropDownButtonClassworkProps) => {
  const { onOpen } = useModalStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ActionTooltip label="Create Material or Assignment">
          <Button variant="default">
            <Plus size={20} />
            <span>Create</span>
          </Button>
        </ActionTooltip>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuItem onClick={() => onOpen("createMaterial", {
          classId,
        })}>
          <div className="cursor-pointer px-10 py-5 gap-5 flex">
            <BookText />
            <span className="text-lg">Material</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onOpen("createAssignment")} className="">
          <div className="cursor-pointer px-10 py-5 gap-5 flex justify-between">
            <BookCheck />
            <span className="text-lg">Assignment</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownButtonClasswork;
