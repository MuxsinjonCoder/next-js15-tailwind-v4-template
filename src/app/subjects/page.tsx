import CreateSubjectModal from "@/components/subjects/create-subject-modal";
import SubjectsTable from "@/components/subjects/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fanlar || Iftixor maktabi ERP tizimi",
  description:
    "Iftixor maktabining ERP tizimi. ERP tizim barcha o'quvchi va o'qituvchilar, xodimlar va ishchilar, fan to'garaklari va o'quvchilar reytinggi, ota-onalar o'z farzandlarini nazorat qilishi osonlashishi uchun xizmat qiladi",
};

export default function SubjectsPage() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-col md:flex-row items-center justify-between gap-5">
          <CardTitle>
            <h1 className="text-xl font-bold">Fanlar ro'yxati</h1>
          </CardTitle>
          <div className="w-full md:max-w-[200px]">
            <CreateSubjectModal />
          </div>
        </CardHeader>
        <CardContent>
          <SubjectsTable />
        </CardContent>
      </Card>
    </>
  );
}
