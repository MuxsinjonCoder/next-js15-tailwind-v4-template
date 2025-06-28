import TakeAttendanceTable from "@/components/lesson-schedule/attendance/take-attendance";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Davomat daftarchasi || Iftixor maktabi ERP tizimi",
  description:
    "Iftixor maktabining ERP tizimi. ERP tizim barcha o'quvchi va o'qituvchilar, xodimlar va ishchilar, fan to'garaklari va o'quvchilar reytinggi, ota-onalar o'z farzandlarini nazorat qilishi osonlashishi uchun xizmat qiladi",
};

export default function AttendancePage() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-col md:flex-row items-center justify-between gap-5">
          <CardTitle>
            <h1 className="text-xl font-bold">
              <span className="text-primary">{"6A"}</span> sinfni davomat qilish
            </h1>
          </CardTitle>
          <div className="w-full md:max-w-[200px]">
            <Button>Saqlash</Button>
          </div>
        </CardHeader>
        <CardContent>
          <TakeAttendanceTable />
        </CardContent>
      </Card>
    </>
  );
}
