"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "path";
import axios, { AxiosError } from "axios";
import { useModalStore } from "@/hooks/use-modal-store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CreateMeetingLink = () => {
  const { isOpen, modalType, onClose, data } = useModalStore();
  const isModalOpen = isOpen && modalType === "createMeetingLink";
  const router = useRouter();

  console.log(data);

  const formSchema = z.object({
    meetingLink: z.string().min(1, {
      message: "Meeting link should not be empty.",
    }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      meetingLink: "",
    },
  });

  useEffect(() => {
    if (data.type === "edit") {
      form.setValue("meetingLink", data.class?.meetingLink as string);
    }
  }, [data, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // console.log(values);
    try {
      await axios.patch(`/api/classes/${data.class?.id}`, values);

      // reset form
      form.reset();
      router.refresh();
      onClose();
    } catch (error: any) {
      // console.log(error?.response.data);
      alert(error?.response.data);
    }
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            {/* Add Meeting Link */}
            {data.type === "edit" ? "Edit Meeting Link" : "Add Meeting Link"}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-2 px-6">
              {/* validation error */}
              <FormField
                control={form.control}
                name="meetingLink"
                render={({ field, formState: { errors } }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Meeting Link (required)
                    </FormLabel>
                    <FormMessage />
                    {/* <span className="text-red-500">
                        {errors.name?.message}
                      </span> */}
                    <FormControl>
                      <Input
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Enter class name"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button
                variant="default"
                disabled={
                  !form.formState.isValid || form.formState.isSubmitting
                }
              >
                {data.type === "edit" ? "Update" : "Create"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateMeetingLink;
// meet.google.com/tms-uozf-ddb