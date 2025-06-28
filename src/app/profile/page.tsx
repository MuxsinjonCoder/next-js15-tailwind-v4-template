import ProfileUpdate from "@/components/profile/profile-update";
import ChangePassword from "@/components/profile/update-password";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil || Iftixor maktabi ERP tizimi",
  description:
    "Iftixor maktabining ERP tizimi. ERP tizim barcha o'quvchi va o'qituvchilar, xodimlar va ishchilar, fan to'garaklari va o'quvchilar reytinggi, ota-onalar o'z farzandlarini nazorat qilishi osonlashishi uchun xizmat qiladi",
};

export default function ProfilePage() {
  return (
    <>
      <div>
        <div className="flex flex-col items-start md:flex-row md:items-center justify-between gap-5 mb-5">
          <h1 className="text-2xl font-bold">Foydalanuvchi profili</h1>
          <ChangePassword />
        </div>
        <ProfileUpdate />
      </div>
    </>
  );
}
