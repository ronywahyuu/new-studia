"use client";

import * as React from "react";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "../ui/button";
import { Library, Search } from "lucide-react";
import Link from "next/link";

interface SearchCommandProps {
  classes: any;
}
export function SearchCommand({ classes }: SearchCommandProps) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);


  return (
    <>
      <Command className="w-80">
        <button
          onClick={() => setOpen(true)}
          className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-6700/50 transition "
        >
          <Search className="h-4 w-4 text-zinc-500 dar:text-zinc-400" />
          <p className="font-semibold text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition">
            Search Classes
          </p>
          <kbd className="pointer-events-none inline-flex text-sm h-5 select-none items-center gap-1 rounded border bg-muted p-1 px-1.5 font-mono text-[10px] text-muted-foreground ml-auto">
            ctrl+k
          </kbd>
        </button>
        {/* <Button
          variant="outline"
          onClick={() => setOpen((open) => !open)}
          className="flex "
        >
          <span>Search Classes</span>
          <span className="text-xs">⌘</span>J
        </Button> */}
        {/* <CommandInput
          onClick={() => setOpen((open) => !open)}
          placeholder="Press CTRL + j to search "
        /> */}
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Class">
              {classes.map((classData: any, index: number) => (
                <Link
                  key={index}
                  onClick={() => {
                    setOpen(false);
                  }}
                  href={`/classes/${classData.id}`}
                >
                  <CommandItem className="cursor-pointer">
                    <Library />
                    {classData.name}
                  </CommandItem>
                </Link>
              ))}
              {/* <CommandItem>
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <FaceIcon className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <RocketIcon className="mr-2 h-4 w-4" />
                <span>Launch</span>
              </CommandItem> */}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <PersonIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                <span>Mail</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <GearIcon className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </Command>

      {/* <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p> */}
    </>
  );
}
