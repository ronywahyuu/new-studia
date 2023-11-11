import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { generateUniqueClassCode } from "@/lib/utils";
import { NextResponse } from "next/server";

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

    return NextResponse.json(subject);
  } catch (error) {
    console.log(error);
  }
}

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