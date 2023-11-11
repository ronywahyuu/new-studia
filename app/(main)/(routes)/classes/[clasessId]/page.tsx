import ClassCard from "@/components/class/class-card";
import ClassPost from "@/components/class/class-post";
import Editor from "@/components/text-editor/editor";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface ClasessIdPageProps {
  params: {
    clasessId: string;
  };
}
const ClasessIdPage = ({ params }: ClasessIdPageProps) => {
  return (
    <div className="w-full md:w-3/5 py-16 mx-auto">
      <Card className="w-full shadow-md rounded-xl ">
        <CardHeader className="text-white rounded-t-xl  bg-[#037A87]">
          <div className="flex justify-between">
            <div className="h-32 relative">
              <CardTitle className="text-2xl font-bold  ">Class Title</CardTitle>
              <CardDescription className="text-slate-300 ">
                Teacher Name
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="bg-gray-100 rounded-b-xl py-0">
          {/* class code */}
          <div className="flex flex-row items-center justify-between w-full  py-3 ">
            <div className="flex flex-col">
              <p className="text-gray-500 font-medium">Class Code</p>
              <p className="text-gray-500">123456</p>
            </div>

            {/* participant's avatar */}
          </div>
        </CardFooter>
      </Card>

      {/* rich text editor */}
      <div className="py-10">
        <h2 className="text-xl font-medium text-gray-800">Announce Something to your class</h2>
        {/* <Editor/> */}

        {/* comment list  */}
        <div>
          
        </div>
      </div>

      {/* content / assignment list */}
      <div className="mt-10">
        <ClassPost/>
        <ClassPost/>
        <ClassPost/>
        <ClassPost/>
      </div>
    </div>
  );
};

export default ClasessIdPage;
