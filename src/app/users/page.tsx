import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddUserModal from "@/components/users/add-new-modal";
import UsersTable from "@/components/users/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tizim foydalanuvchilari | Iftixor ERP",
  description:
    "Iftixor maktabiga tegishli ERP tizimidagi barcha foydalanuvchilar ro‘yxati. Ushbu sahifa orqali tizimdagi administratorlar, o‘qituvchilar va boshqa foydalanuvchilarni boshqarish mumkin. Iftixor ERP — ta'lim jarayonini raqamlashtirishda ishonchli yechim.",
};

export default function UsersPage() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-col md:flex-row items-center justify-between gap-5">
          <CardTitle>
            <h1 className="text-xl font-bold">Tizim foydalanuvchilari</h1>
          </CardTitle>
          <div className="w-full md:max-w-[300px]">
            <AddUserModal />
          </div>
        </CardHeader>
        <CardContent>
          <UsersTable />
        </CardContent>
      </Card>
    </>
  );
}
