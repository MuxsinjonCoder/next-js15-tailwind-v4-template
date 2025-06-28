import StudentsRatingTable from "@/components/students-rating/table";
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paintbrush } from "lucide-react";

export const metadata: Metadata = {
  title: "O'quvchilar raytingi || Iftixor maktabi ERP tizimi",
  description:
    "Iftixor maktabining ERP tizimi. ERP tizim barcha o'quvchi va o'qituvchilar, xodimlar va ishchilar, fan to'garaklari va o'quvchilar reytinggi, ota-onalar o'z farzandlarini nazorat qilishi osonlashishi uchun xizmat qiladi",
};

export default function StudentsRatingpage() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-col md:flex-row items-center justify-between gap-5">
          <CardTitle>
            <h1 className="text-xl font-bold">O'quvchilar raytingi</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <StudentsRatingTable />
        </CardContent>
      </Card>
    </>
  );
}
