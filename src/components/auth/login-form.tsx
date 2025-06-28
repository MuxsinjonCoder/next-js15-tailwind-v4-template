"use client";

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
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
// import { useLoginUser } from "@/queries/auth/login";
// import { useToast } from "@/hooks/use-toast";
// import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

// form schemas
const formSchema = z.object({
  login: z
    .string()
    .min(6, { message: "Login kamida 6 ta harfdan iborat bo'lishi kerak." })
    .max(40, { message: "Login maksimal 40 ta harfdan oshmasligi kerak." }),
  password: z
    .string()
    .min(6, { message: "Parol kamida 6 ta harfdan iborat bo'lishi kerak." })
    .max(50, { message: "Parol maksimal 50 ta harfdan oshmasligi kerak." }),
});

export default function LoginForm() {
  // states
  const [showPassword, setShowPassword] = useState(false);

  // queries
  //   const loginUser = useLoginUser();

  // forms
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  // halpers
  //   const { toast } = useToast();
  const router = useRouter();

  // functions

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const submittingData = {
      phone: values?.login,
      password: values?.password,
    };

    console.log("submittingData in login form: ", submittingData);

    // loginUser.mutate(submittingData, {
    //   onSuccess: (response) => {
    //     const token = response?.meta?.Token;
    //     const expirationDate = new Date(response?.meta?.expiredAt);
    //     const role = response?.data?.role;

    //     if (token && role) {
    //       Cookies.set("token", token, { expires: expirationDate });

    //       if (role === "CANDIDATE") {
    //         localStorage.setItem("userData", JSON.stringify(response?.data));
    //         form.reset();
    //         toast({ title: "Siz tizimga muvaffaqiyatli kirdingiz" });
    //         window.location.href = "/user/dashboard";
    //       } else {
    //         localStorage.setItem("userData", JSON.stringify(response?.data));
    //         form.reset();
    //         toast({ title: "Siz tizimga muvaffaqiyatli kirdingiz" });
    //         window.location.href = "/";
    //       }
    //     }
    //   },
    //   onError: (error) => {
    //     const err = error as { response?: { data?: { message?: string } } };
    //     toast({
    //       title:
    //         err?.response?.data?.message ||
    //         "Tizimga kirishda xatolik ro'y berdi.",
    //       variant: "error",
    //     });
    //   },
    // });
  };

  // Tokenni tozalash (expirationDate o'tganidan keyin)
  //   const tokenExpiration = new Date(Cookies.get("tokenExpiration") || "");
  //   if (tokenExpiration < new Date()) {
  //     Cookies.remove("token");
  //     localStorage.removeItem("userData");
  //   }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* login */}
          <FormField
            control={form.control}
            name="login"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Login</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Loginni kiriting"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm text-destructive mt-1" />
              </FormItem>
            )}
          />

          {/* password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parol</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Parolni kiriting"
                      {...field}
                      className="pr-10"
                    />
                    {field.value && (
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-2 flex items-center text-muted-foreground"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    )}
                  </div>
                </FormControl>
                <FormMessage className="text-sm text-destructive mt-1" />
              </FormItem>
            )}
          />

          {/* <Button disabled={loginUser.isLoading} type="submit" variant="submit">
            {loginUser.isLoading
              ? "Ma'lumotlar tekshirilmoqda"
              : "Tizimga kirish"}
          </Button> */}

          <Button type="submit" variant="submit">
            Tizimga kirish
          </Button>
        </form>
      </Form>
    </div>
  );
}
