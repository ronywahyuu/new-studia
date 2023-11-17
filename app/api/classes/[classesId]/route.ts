import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// edit class
export async function PATCH(
  req: Request,
  { params }: { params: { classesId: string } }
) {
  try {
    const profile = await currentProfile();
    const { name, subject } = await req.json();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const classRoom = await db.class.findFirst({
      where: { id: params.classesId },
    });

    if (!classRoom) {
      return new NextResponse("Class not found", { status: 404 });
    }

    const editClass = await db.class.update({
      where: {
        id: params.classesId,
      },
      data: {
        name,
        subject,
      },
    });

    return NextResponse.json(editClass, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}


// create class post
export async function POST(
  req: Request,
  { params }: { params: { classesId: string } }
) {
  try {
    const profile = await currentProfile();
    const { title, body } = await req.json();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const classRoom = await db.class.findFirst({
      where: { id: params.classesId },
    });

    if (!classRoom) {
      return new NextResponse("Class not found", { status: 404 });
    }

    const createPost = await db.classPost.create({
      data: {
        title,
        body,
        classId: params.classesId,
        userId: profile.id,
      },
    });

    return NextResponse.json(createPost, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}