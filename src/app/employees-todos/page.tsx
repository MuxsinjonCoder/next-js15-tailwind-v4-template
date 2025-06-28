import CreateTodoModal from "@/components/employees-todos/create-todo-modal";
import TodoList from "@/components/employees-todos/todo-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xodimlar uchun opshiriqlar || Iftixor maktabi ERP tizimi",
  description:
    "Iftixor maktabining ERP tizimi. ERP tizim barcha o'quvchi va o'qituvchilar, xodimlar va ishchilar, fan to'garaklari va o'quvchilar reytinggi, ota-onalar o'z farzandlarini nazorat qilishi osonlashishi uchun xizmat qiladi",
};

export default function EmployeesTodosPage() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-col md:flex-row items-center justify-between gap-5">
          <CardTitle>
            <h1 className="text-xl font-bold">Xodimlar uchun topshiriqlar</h1>
          </CardTitle>
          <div className="w-full md:max-w-[200px]">
            <CreateTodoModal />
          </div>
        </CardHeader>
        <CardContent>
          <div>
            <Tabs defaultValue="active" className="w-full">
              <TabsList>
                <TabsTrigger value="active">Bajarilayotgan</TabsTrigger>
                <TabsTrigger value="completed">Yakunlangan</TabsTrigger>
              </TabsList>
              <TabsContent value="active">
                <TodoList type="active" />
              </TabsContent>
              <TabsContent value="completed">
                <TodoList type="completed" />
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
