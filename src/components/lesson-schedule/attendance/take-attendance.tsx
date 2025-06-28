"use client";

import { UserCheck } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import { Switch } from "../../ui/switch";

const initialStudents = [
  { id: 12345, name: "Student1 Fullname", missedLessonCount: 4 },
  { id: 23456, name: "Student2 Fullname", missedLessonCount: 9 },
  { id: 34567, name: "Student3 Fullname", missedLessonCount: 2 },
  { id: 45678, name: "Student4 Fullname", missedLessonCount: 0 },
  { id: 56789, name: "Student5 Fullname", missedLessonCount: 3 },
  { id: 67890, name: "Student6 Fullname", missedLessonCount: 1 },
  { id: 78901, name: "Student7 Fullname", missedLessonCount: 5 },
  { id: 89012, name: "Student8 Fullname", missedLessonCount: 7 },
  { id: 90123, name: "Student9 Fullname", missedLessonCount: 6 },
  { id: 12346, name: "Student10 Fullname", missedLessonCount: 8 },
  { id: 23457, name: "Student11 Fullname", missedLessonCount: 2 },
  { id: 34568, name: "Student12 Fullname", missedLessonCount: 0 },
  { id: 45679, name: "Student13 Fullname", missedLessonCount: 1 },
  { id: 56780, name: "Student14 Fullname", missedLessonCount: 4 },
  { id: 67891, name: "Student15 Fullname", missedLessonCount: 5 },
  { id: 78902, name: "Student16 Fullname", missedLessonCount: 3 },
  { id: 89013, name: "Student17 Fullname", missedLessonCount: 6 },
  { id: 90124, name: "Student18 Fullname", missedLessonCount: 7 },
  { id: 12347, name: "Student19 Fullname", missedLessonCount: 1 },
  { id: 23458, name: "Student20 Fullname", missedLessonCount: 2 },
];

export default function TakeAttendanceTable() {
  return (
    <>
      <div>
        <Table className="bg-background">
          <TableHeader className="bg-accent">
            <TableRow>
              <TableHead className="w-[50px] text-center">N</TableHead>
              <TableHead className="text-left">O'quvchi nomi</TableHead>
              <TableHead className="text-center">Kelmagan darslar</TableHead>
              <TableHead className="text-center">
                <UserCheck className="size-5 mx-auto" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialStudents?.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="w-[50px] text-center">
                  {index + 1}
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1 max-w-[450px]">
                    <p className="font-bold text-primary truncate">
                      {item?.name}
                    </p>
                    <p className="font-bold opacity-70 text-xs">
                      ID: {item?.id}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="w-[150px] text-center font-semibold">
                  {item?.missedLessonCount}
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-center">
                    <Switch className="cursor-pointer" defaultChecked={true} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
