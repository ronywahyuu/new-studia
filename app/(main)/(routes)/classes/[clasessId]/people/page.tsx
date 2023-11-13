import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import Image from "next/image";

interface PeoplePageProps {
  params: {
    clasessId: string;
  };
}

const PeoplePage = async ({ params }: PeoplePageProps) => {
  // console.log(params.clasessId);
  const peopleFromThisClass = await db.member.findMany({
    where: {
      classId: params.clasessId,
    },
    include: {
      user: true,
    },
  });

  const totalStudents = peopleFromThisClass.filter(
    (person) => person.role === "STUDENT"
  ).length

  return (
    <div className="px-16 py-10 w-full md:w-3/5 mx-auto">
      <div>
        <h1 className="text-4xl font-medium text-cyan-800">Teachers</h1>
        <Separator />

        {/* list of teachers if any */}
        {peopleFromThisClass
          .filter((person) => person.role === "TEACHER")
          .map((teacher) => (
            <div key={teacher.id}>
              <div className="flex items-center space-x-4 py-5">
                {/* <div className="h-10 w-10 rounded-full bg-gray-200"></div> */}
                <Image
                  alt="Profile Picture"
                  src={teacher.user.imageUrl}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h1 className="text-xl font-medium">
                    {teacher.user.name
                      .split(" ")
                      .map((word) => word[0].toUpperCase() + word.slice(1))
                      .join(" ")}
                  </h1>
                  <p className="text-gray-500">Teacher</p>
                </div>
              </div>
              <Separator />
            </div>
          ))}
      </div>

      <div className="mt-10">
        <div
          className="flex justify-between items-center text-cyan-800"
        >
          <h1 className="text-4xl font-medium">Students</h1>
          <p>{totalStudents} Student</p>
        </div>
        <Separator />

        {/* list of students if any */}
        {peopleFromThisClass
          .filter((person) => person.role === "STUDENT")
          .map((student) => (
            <div key={student.id}>
              <div className="flex items-center space-x-4 py-5">
                {/* <div className="h-10 w-10 rounded-full bg-gray-200"></div> */}
                <Image
                  alt="Profile Picture"
                  src={student.user.imageUrl}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h1 className="text-xl font-medium">
                    {student.user.name
                      .split(" ")
                      .map((word) => word[0].toUpperCase() + word.slice(1))
                      .join(" ")}
                  </h1>
                  <p className="text-gray-500">Student</p>
                </div>
              </div>
              <Separator />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PeoplePage;
