import NotificationsList from "@/components/notifications/notifications-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bildirishnomalar || Iftixor maktabi ERP tizimi",
  description:
    "Iftixor maktabining ERP tizimi. ERP tizim barcha o'quvchi va o'qituvchilar, xodimlar va ishchilar, fan to'garaklari va o'quvchilar reytinggi, ota-onalar o'z farzandlarini nazorat qilishi osonlashishi uchun xizmat qiladi",
};

export default function NotificationsPage() {
  return (
    <>
      <div className="container">
        <h1 className="font-bold text-xl sm:text-2xl mb-5">Bildirishnomalar</h1>
        <div>
          <NotificationsList />
        </div>
      </div>
    </>
  );
}
