import ClassPost from "@/components/class/class-post";
import DropDownButtonClasswork from "@/components/dropdown/dropdown-button-classwork";
import { Button } from "@/components/ui/button";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

interface ClassworkPageProps {
  params: {
    clasessId: string;
  };
}

const ClassworkPage = async ({ params }: ClassworkPageProps) => {
  const profile = await currentProfile();
  const classWorkData = await db.class.findUnique({
    where: {
      id: params.clasessId,
    },
    include: {
      classPosts: {
        include: {
          user: true,
        },
      },
      materials: {
        include: {
          user: true,
        },
      },
      members: {
        select: {
          role: true,
          user: true,
        },
      },
    },
  });

  // is teacher
  const findTeacher = classWorkData?.members.find(
    (member) => member.user.id === classWorkData?.owner
  );

  const isTeacher = classWorkData?.owner === profile?.id;

  // console.log(findTeacher?.user.id, findTeacher?.user.name);
  // console.log(profile?.id, profile?.name);
  // console.log(isTeacher)
  // console.log("")
  // console.log(classWorkData);
  return (
    <div className="w-full md:w-5/6 px-16 py-5 mx-auto">
      <div>
        {isTeacher ? (
          <DropDownButtonClasswork classId={params.clasessId} />
        ) : (
          <Button variant="default">
            View your work
          </Button>
        )}
      </div>

      {/* list of classwork */}
      <div className="mt-10">
        {classWorkData?.materials?.map((material) => (
          <ClassPost
            key={material.id}
            type="material"
            classMaterial={material}
          />
        ))}
      </div>
    </div>
  );
};

export default ClassworkPage;
