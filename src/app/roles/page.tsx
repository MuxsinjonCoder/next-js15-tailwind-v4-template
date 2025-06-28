import CreateRoleModal from "@/components/roles/create-role-modal";
import RolesTable from "@/components/roles/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tizim uchun rollar || Iftixor maktabi ERP tizimi",
  description:
    "Iftixor maktabining ERP tizimi. ERP tizim barcha o'quvchi va o'qituvchilar, xodimlar va ishchilar, fan to'garaklari va o'quvchilar reytinggi, ota-onalar o'z farzandlarini nazorat qilishi osonlashishi uchun xizmat qiladi",
};

export default function RolesPage() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-col md:flex-row items-center justify-between gap-5">
          <CardTitle>
            <h1 className="text-xl font-bold">Rollar</h1>
          </CardTitle>
          <div className="w-full md:max-w-[200px]">
            <CreateRoleModal />
          </div>
        </CardHeader>
        <CardContent>
          <RolesTable />
        </CardContent>
      </Card>
    </>
  );
}
