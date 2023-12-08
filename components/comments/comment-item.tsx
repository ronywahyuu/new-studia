import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Comment } from "@/types";

interface CommentItemProps {
  comment?: Comment;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  return (
    <div className="comment-item flex flex-col gap-2">
      <div className="comment-header flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex gap-2 items-center">
            <h4 className="font-semibold text-gray-800">{comment?.user.name}</h4>
            <p className="text-gray-500 text-sm">Nov 9</p>
          </div>
          <div className="comment-body">
            <p className="text-gray-700">{comment?.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
