import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { generateUniqueClassCode } from "@/lib/utils";
import { NextResponse } from "next/server";

// create class
export async function POST(req: Request) {
  try {
    const profile = await currentProfile();
    const { name, subject } = await req.json();
    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const code = generateUniqueClassCode();

    const classWithCode = await db.class.findUnique({
      where: { classCode: code },
    });

    if (classWithCode) {
      // The code exists, so generate a new code
      return generateUniqueClassCode();
    }

    const classRoom = await db.class.create({
      data: {
        name,
        subject,
        owner: profile.id,
        classCode: code,
        imageUrl: "",
      },
    });

    const member = await db.member.create({
      data: {
        role: "TEACHER",
        classId: classRoom.id,
        userId: profile.id,
      },
    });

    return NextResponse.json(subject);
  } catch (error) {
    console.log(error);
  }
}

// join class
export async function PUT(req: Request) {
  try {
    const profile = await currentProfile();
    const { classCode } = await req.json();
    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const classRoom = await db.class.findFirst({
      where: { classCode },
    });

    if (!classRoom) {
      return new NextResponse("Class not found", { status: 404 });
    }

    const memberClass = await db.member.findFirst({
      where: {
        userId: profile.id,
        classId: classRoom.id,
      },
    });

    if (memberClass) {
      return new NextResponse("You are already a member of this class", {
        status: 400,
      });
    }


    const member = await db.member.create({
      data: {
        role: "STUDENT",
        classId: classRoom.id,
        userId: profile.id,
      },
    });

    return NextResponse.json(classRoom);
  } catch (error) {
    // console.log(error);
  }
}

// get classes
export async function GET() {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const classes = await db.class.findMany({
      where: {
        owner: profile.id,
      },
    });

    return NextResponse.json(classes);
  } catch (error) {
    console.log(error);
  }
}
