import LoginBgElements from "@/components/auth/login-bg-elements";
import LoginCard from "@/components/auth/login-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login || Iftixor maktabi ERP tizimi",
  description:
    "Iftixor maktabining ERP tizimi. ERP tizim barcha o'quvchi va o'qituvchilar, xodimlar va ishchilar, fan to'garaklari va o'quvchilar reytinggi, ota-onalar o'z farzandlarini nazorat qilishi osonlashishi uchun xizmat qiladi",
};

export default function SignInPage() {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="h-screen w-full flex items-center justify-center relative">
          {/* Animated background elements */}
          <LoginBgElements />

          {/* animated login card */}
          <LoginCard />
        </div>
      </div>
    </>
  );
}
