"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import ActionTooltip from "../action-tooltip";
import { Plus } from "lucide-react";
import { useModalStore } from "@/hooks/use-modal-store";

const DropDownButton = () => {
  const { onOpen } = useModalStore();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ActionTooltip label="Create or Join Class">
          <Plus
            size={50}
            className="cursor-pointer hover:bg-gray-300 rounded-full active:no-underline p-2"
          />
        </ActionTooltip>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <DropdownMenuItem onClick={() => onOpen("createClass")}>
          <span className="text-lg">Create Class</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onOpen("joinClass")} className="">
          <span className="text-lg">Join Class</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownButton;
