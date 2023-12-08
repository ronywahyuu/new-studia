import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// create a new comment
export async function POST(req: Request) {
  try {
    const profile = await currentProfile();
    const url = new URL(req.url);
    const {
      body,
    }: {
      body: string;
    } = await req.json();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const newComment = await db.comment.create({
      data: {
        body: body as string,
        postId: url.searchParams.get("postId") as string,
        userId: profile.id,
      }
    })

    return NextResponse.json(newComment, { status: 201 })
    // return NextResponse.json({
    //   comment: body,
    //   url,
    //   postId: url.searchParams.get("postId"),
    //   classId: url.searchParams.get("classId"),
    // });
  } catch (error) {
    console.log(error);
  }
}
