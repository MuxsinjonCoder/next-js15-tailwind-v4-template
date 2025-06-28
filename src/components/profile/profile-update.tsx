"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
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
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// form schemas
const formSchema = z.object({
  phone: z
    .string()
    .min(9, {
      message: "Telefon raqamni to'g'ri kiriting.",
    })
    .max(50, { message: "Telefon raqam 50 ta sondan oshmasligi kerak." }),
  fullName: z
    .string()
    .min(5, { message: "Ism kamida 5 ta harfdan iborat bo'lishi kerak." })
    .max(50, { message: "Ism 50 ta harfdan oshmasligi kerak." }),
  email: z.string({ required_error: "Emailni to'g'ri kiriting" }),
});

export default function ProfileUpdate() {
  // forms
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      fullName: "",
      email: "",
    },
  });

  // useEffects
  /* useEffect(() => {
    if (user) {
      form.reset({
        phone: user?.phone || "",
        fullName: user?.fullName || "",
        email: user?.email || "",
      });
    }
  }, [user, form]); */

  // halpers
  // const { toast } = useToast();
  const router = useRouter();
  /* useEffect(() => {
    if (user && user?.role === "CANDIDATE") {
      router.replace("/user/dashboard");
    }
  }, [user, router]); */

  // functions
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    /* const updatingData = {
      fullName: values?.fullName,
      email: values?.email,
      phone: values?.phone,
    };

    updateUserCredentials.mutate(
      { data: updatingData, id: user?.id as number },
      {
        onSuccess: () => {
          form.reset();
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
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <span className="text-primary text-xl font-bold">
              {/* {user?.fullName} */}User Name
            </span>
            ning shaxsiy ma'lumotlari
          </CardTitle>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="flex items-center justify-between gap-4 flex-wrap">
              <div className="w-full md:w-[30%]">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ism</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Ismingizni kiriting"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive mt-1" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full md:w-[30%]">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Emailni kiriting"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm text-destructive mt-1" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full md:w-[30%]">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefon raqam</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            +998
                          </span>
                          <Input
                            type="text"
                            placeholder="11 222 3344"
                            {...field}
                            value={field.value
                              ?.replace(/\D/g, "")
                              .slice(0, 9)
                              .replace(/(\d{2})(\d{3})(\d{4})/, "$1 $2 $3")}
                            onChange={(e) => {
                              const raw = e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 9);
                              field.onChange(raw);
                            }}
                            className="pl-16"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-sm text-destructive mt-1" />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter className="flex items-center gap-5 w-full md:w-[500px] mt-5">
              <Button type="submit" variant={"submit"}>
                Saqlash
              </Button>
              <Button
                type="button"
                variant={"secondary"}
                onClick={() => form.reset()}
              >
                Qaytarish
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </>
  );
}
