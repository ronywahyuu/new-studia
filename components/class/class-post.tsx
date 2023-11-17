import { BellIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
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
// import { ClassPost } from "@/types";
// import { Switch } from "@/components/ui/switch"

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

interface ClassPostProps {
  className?: string;
  CardProps?: CardProps;
  classPost?: any;
}

function ClassPost({ className, classPost, ...props }: ClassPostProps) {
  return (
    <Card className={cn("w-full  mb-10 ", className)} {...props}>
      <div className="flex p-5 items-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-xl">{classPost?.user.name}</CardTitle>
          <CardDescription>
            <span className="text-sm text-muted-foreground">
              {
                classPost?.createdAt
                  .toString()
                  .split("T")[0]
                  .split("-")
                  .reverse()
                  .join("-")
              }
            </span>
          </CardDescription>
        </div>
      </div>
      <CardContent className="grid gap-4">
        <div>
          <p className="text-sm text-gray-800">
            {classPost?.body}
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quia, quos voluptas odio quae consequatur
            dolorum magnam officia quas? Quisquam voluptatum, voluptate, quia,
            quos voluptas odio quae consequatur dolorum magnam officia quas? */}
          </p>
          {/* {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))} */}
        </div>
      </CardContent>
      <CardFooter className="">
        {/* comment */}
        <CommentInput />

        {/* comment list */}
      </CardFooter>
      <div className="p-4">
        <CommentItem />
      </div>
    </Card>
  );
}

export default ClassPost;
