import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// add material
export async function POST(
  req: Request,
  { params }: { params: { classesId: string } }
) {
  try {
    const profile = await currentProfile()
    const { title, description, fileUrl }: {
      title: string,
      description: string,
      fileUrl: string
    } = await req.json()

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const classRoom = await db.class.findFirst({
      where: { id: params.classesId },
    })

    if (!classRoom) {
      return new NextResponse("Class not found", { status: 404 })
    }

    const addMaterial = await db.class.update({
      where: {
        id: params.classesId,
      },
      data: {
        materials : {
          create: {
            title,
            description,
            fileUrl,
            userId: profile.id
          }
        }
      },
      include: {
        materials: true
      }
    })
    return NextResponse.json(addMaterial, { status: 200 })
  } catch (error) {
    console.log(error);
  }
}
