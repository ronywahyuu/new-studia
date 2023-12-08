"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import qs from "query-string";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

interface CommentInputProps {
  postId?: string;
}

const formSchema = z.object({
  body: z.string().min(1),
});

function CommentInput({ postId }: CommentInputProps) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      body: "",
    },
  });
  const { clasessId } = useParams();
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // console.log(values);
    // alert(JSON.stringify(values, null, 2));
    try {
      // const res = await axios.post("/api/comments", values);
      const url = qs.stringifyUrl({
        url: "/api/comments",
        query: {
          postId,
          classId: clasessId as string,
        },
      });

      const res = await axios.post(url, values);
      // console.log(url);
      router.refresh();
      form.reset();
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex w-full gap-2"
        >
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem className="w-full flex">
                <FormControl>
                  <Input
                    className="w-full"
                    placeholder="Add class comment..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            type="submit"
          >
            <SendHorizontal />
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default CommentInput;
