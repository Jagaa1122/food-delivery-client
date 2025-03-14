import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formShema = z.object({
  categoryName: z.string().min(2, "Minimum 2 letter !"),
});

export const AddCategory = ({
  createCategories,
  updateCategory,
  setIsEdit,
  isEdit,
  saveID,
  setOpen,
  open,
}: {
  createCategories: (categoryName: string) => void;
  updateCategory: (categoryName: string, categoryId: string) => void;
  setIsEdit: (f: boolean) => void;
  isEdit: boolean;
  saveID: string;
  setOpen: (_a: boolean) => void;
  open: boolean;
}) => {
  const form = useForm<z.infer<typeof formShema>>({
    resolver: zodResolver(formShema),
    defaultValues: {
      categoryName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formShema>) {
    console.log(values);
    if (isEdit) {
      updateCategory(saveID, values.categoryName);
    } else {
      createCategories(values.categoryName);
    }

    form.reset();
    setOpen(false);
  }

  //   const addClick = () => {
  //     setIsEdit(false);
  //   };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant={"destructive"}
            className="w-9 h-9 flex items-center justify-center rounded-full "
          >
            <Plus />
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader hidden></DialogHeader>
          <DialogTitle hidden></DialogTitle>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" w-[460px] flex flex-col items-start gap-6 "
            >
              <div className="w-full pb-4 fle justify-center items-center gap-[10px] ">
                <h4 className="text-[18px] font-[600] leading-[28px]  ">
                  {isEdit ? "Edit category" : "Add new category"}
                </h4>
              </div>
              <FormField
                control={form.control}
                name="categoryName"
                render={({ field }) => (
                  <FormItem className="w-full ">
                    <FormControl className="w-full ">
                      <div className="w-full h-[60px] flex flex-col gap-[8px] ">
                        <p className="text-[14px] leading-[14px] font-[500] ">
                          Category name
                        </p>
                        <Input
                          placeholder="Type category name... "
                          className="w-full py-2 px-3 "
                          {...field}
                        />
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full pt-6 flex items-center justify-end ">
                <Button
                  type="submit"
                  //   onClick={() => addClick()}
                  className="h-10 py-2 px-4 "
                >
                  Add category
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};
