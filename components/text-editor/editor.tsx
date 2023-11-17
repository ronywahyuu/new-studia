"use client";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ClassData } from "@/types";

const formSchema = z.object({
  body: z.string().min(1, {
    message: "Body should not be empty.",
  }),
});

interface EditorProps {
  classData: any;
}

const Editor = ({ classData }: EditorProps) => {
  console.log(classData);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      body: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post(`/api/classes/${classData?.id}`, values);

      form.reset();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem className="">
              <FormControl>
                <textarea
                  placeholder="Announce something to your class"
                  className="p-7 w-full border rounded-md"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Post</Button>
      </form>
    </Form>
  );
  // return <ReactQuill theme="snow" value={value} className=" bg-white" onChange={setValue} />;
};

export default Editor;
