"use client";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

// form schemas
const formSchema = z
  .object({
    oldPassword: z
      .string()
      .min(6, { message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak." })
      .max(50, {
        message: "Parolning maksimal uzunligi 50 ta belgidan oshmasligi kerak.",
      }),
    newPassword: z
      .string()
      .min(6, { message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak." })
      .max(50, {
        message: "Parolning maksimal uzunligi 50 ta belgidan oshmasligi kerak.",
      }),
    confirmPassword: z
      .string()
      .min(6, { message: "Parol kamida 6 ta belgidan iborat bo'lishi kerak." })
      .max(50, {
        message: "Parolning maksimal uzunligi 50 ta belgidan oshmasligi kerak.",
      }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Parollar mos kelmadi.",
    path: ["confirmPassword"],
  });

export default function ChangePassword() {
  // contexts
  // const { user } = useUser();

  // states
  const [isOpen, setIsOpen] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // forms
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  // queries
  // const updatePassword = useUpdatePassword();

  // halpers
  // const { toast } = useToast();

  // functions
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    /* console.log("values in ChangePassword form: ", values);

    const updatingPassword = {
      oldPassword: values?.oldPassword,
      newPassword: values?.newPassword,
    };

    updatePassword.mutate(
      { data: updatingPassword, id: user?.id as number },
      {
        onSuccess: () => {
          form.reset();
          setIsOpen(false);
          toast({
            title: `Savol muvaffaqiyyatli o'zgartirildi.`,
          });
        },
        onError: (error) => {
          const err = error as { response?: { data?: { message?: string } } };
          toast({
            title:
              err?.response?.data?.message ||
              "Savolni o'zgartirishda muammo yuz berdi.",
            variant: "error",
          });
        },
      }
    ); */
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="max-w-[300px]">
          <Button onClick={() => setIsOpen(true)}>Parolni o'zgartirish</Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Parolni o'zgartirish</DialogTitle>
          <DialogDescription>
            Parolni yodda saqlash oson va xavfsiz tarzda tanlang, kerak bo'lsa
            xavfsiz joyda saqlang.
          </DialogDescription>
        </DialogHeader>
        <div className="my-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* oldPassword */}
              <FormField
                control={form.control}
                name="oldPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Eski parol</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showOldPassword ? "text" : "password"}
                          placeholder="Eski parolni kiriting"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="icon"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                          onClick={() => setShowOldPassword(!showOldPassword)}
                        >
                          {showOldPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-sm text-destructive mt-1" />
                  </FormItem>
                )}
              />

              {/* newPassword */}
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Yangi parol</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showNewPassword ? "text" : "password"}
                          placeholder="Yangi parolni kiriting"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="icon"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-sm text-destructive mt-1" />
                  </FormItem>
                )}
              />

              {/* confirmPassword */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parolni tasdiqlash</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Yangi parol bilan bir xil bo'lishi kerak"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="icon"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-sm text-destructive mt-1" />
                  </FormItem>
                )}
              />

              <DialogFooter className="flex items-center justify-between gap-5 pt-4">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    form.reset();
                    setIsOpen(false);
                  }}
                >
                  Bekor qilish
                </Button>
                <Button type="submit" variant="submit">
                  Parolni o'zgartirish
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
