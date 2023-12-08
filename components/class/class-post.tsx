import { BellIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn, formatMemberNameToCapital } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import CommentInput from "../comments/comment-input";
// import CommentList from "../comments/comment-item";
import CommentItem from "../comments/comment-item";
import { File, Menu, MoreVertical, Pencil, Trash2Icon } from "lucide-react";
import Link from "next/link";
import { ClassPostType } from "@/types";
import { db } from "@/lib/db";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
// import { ClassPost } from "@/types";
// import { Switch } from "@/components/ui/switch"

type CardProps = React.ComponentProps<typeof Card>;

interface ClassPostProps {
  CardProps?: CardProps;
  classMaterial?: any;
  className?: string;
  classPost?: ClassPostType;
  type?: "classPost" | "material" | "assignment";
}

async function ClassPost({
  className,
  classPost,
  type,
  classMaterial,
  ...props
}: ClassPostProps) {
  const comments = await db.comment.findMany({
    where: {
      postId: classPost?.id,
    },
    include: {
      user: true,
    },
  });

  // console.log(comments);

  // console.log(clasessId);
  if (type === "material") {
    return (
      <Link
        href={`/class/${classMaterial?.classId}/material/${classMaterial?.id}`}
      >
        <Card
          className={cn(
            "w-full hover:bg-gray-100 transition   mb-5 ",
            className
          )}
          {...props}
        >
          <div className="flex p-5 items-center  ">
            <File className="mr-2 w-10 h-10 " />

            <div>
              <p>
                {formatMemberNameToCapital(classMaterial.user.name)} posted a
                material : {classMaterial?.title}
              </p>
              <p className="text-gray-500">
                {classMaterial?.createdAt
                  .toString()
                  .split("T")[0]
                  .split("-")
                  .reverse()
                  .join("-")}
              </p>
            </div>
          </div>
        </Card>
      </Link>
    );
  }
  return (
    <Card className={cn("w-full  mb-5 ", className)} {...props}>
      <div className="flex p-5 items-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-xl">{classPost?.user.name}</CardTitle>
          <CardDescription>
            <span className="text-sm text-muted-foreground">
              {classPost?.createdAt
                .toString()
                .split("T")[0]
                .split("-")
                .reverse()
                .join("-")}
            </span>
          </CardDescription>
        </div>
        <span className="ml-auto cursor-pointer">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="">
                <Pencil className="w-4 h-4 mr-5" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="">
                  <Trash2Icon className="w-4 h-4 mr-5"/>
                  Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </span>
        {/* <Menu className="ml-auto"/> */}
      </div>
      <CardContent className="grid gap-4">
        <div>
          <p className="text-sm text-gray-800">{classPost?.body}</p>
        </div>
      </CardContent>
      <CardFooter className="block">
        {/* comment */}
        <CommentInput postId={classPost?.id as string} />

        {/* comment list */}
        <div className="mt-4">
          <h2>Class Comment</h2>

          <div className="space-y-5 mt-5">
            {comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
            {/* <CommentItem /> */}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ClassPost;
