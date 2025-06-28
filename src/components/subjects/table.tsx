"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Edit2, Settings2, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Badge } from "../ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ConfirmDeleteModal from "../reuseable/confirm-delete-modal";
import { useState } from "react";

const initialSubjects = {
  elements: 120,
  page: 12,
  data: [
    {
      id: 1,
      name: "Matematika",
      classes: [5, 6, 7, 8, 9, 10, 11],
      teachersList: [
        "Olimov Anvar",
        "Tursunova Laylo",
        "Qodirov Jahongir",
        "Ismoilova Nargiza",
      ],
      bookCount: "120",
      courses: true,
    },
    {
      id: 2,
      name: "Fizika",
      classes: [6, 7, 8, 9, 10, 11],
      teachersList: [
        "Rustamov Ilhom",
        "Shamsieva Ozoda",
        "Karimov Aziz",
        "Aliyeva Dildora",
      ],
      bookCount: "95",
      courses: true,
    },
    {
      id: 3,
      name: "Kimyo",
      classes: [7, 8, 9, 10, 11],
      teachersList: [
        "Bekzodova Zarnigor",
        "Sharipov Bobur",
        "Maxmudova Feruza",
        "Tadjibaeva Malika",
      ],
      bookCount: "105",
      courses: false,
    },
    {
      id: 4,
      name: "Biologiya",
      classes: [6, 7, 8, 9],
      teachersList: [
        "Zokirova Nafisa",
        "Toirov Kamol",
        "Sattorova Mohira",
        "Jo‘rayev Behruz",
      ],
      bookCount: "87",
      courses: true,
    },
    {
      id: 5,
      name: "Ingliz tili",
      classes: [5, 6, 7, 8, 9, 10],
      teachersList: ["Abdullaeva Nigora", "Smith John", "Ali Karim", "Zarina"],
      bookCount: "140",
      courses: true,
    },
    {
      id: 6,
      name: "Rus tili",
      classes: [5, 6, 7, 8],
      teachersList: [
        "Petrova Anna",
        "Ivanov Sergey",
        "Natalya Romanova",
        "Marat Abdurahmonov",
      ],
      bookCount: "80",
      courses: false,
    },
    {
      id: 7,
      name: "Ona tili",
      classes: [5, 6, 7, 8, 9],
      teachersList: [
        "Hamidova Malohat",
        "Saidov Timur",
        "Xamidov Oybek",
        "Jalilova Nargiza",
      ],
      bookCount: "110",
      courses: true,
    },
    {
      id: 8,
      name: "Tarix",
      classes: [7, 8, 9, 10, 11],
      teachersList: [
        "Rustamova Sevara",
        "To‘xtasinov Murod",
        "Zarifboyev Salim",
        "Nozimova Dilnoza",
      ],
      bookCount: "102",
      courses: true,
    },
    {
      id: 9,
      name: "Geografiya",
      classes: [6, 7, 8],
      teachersList: [
        "Yuldasheva Xolida",
        "Qo‘chqorov Mardon",
        "Ziyodulla Isroilov",
        "Komilova Nafisa",
      ],
      bookCount: "90",
      courses: false,
    },
    {
      id: 10,
      name: "Informatika",
      classes: [7, 8, 9, 10, 11],
      teachersList: [
        "Turg‘unov Sardor",
        "Asqarova Aziza",
        "Mahmudov Eldor",
        "Iroda Rasulova",
      ],
      bookCount: "135",
      courses: true,
    },
  ],
};

export default function SubjectsTable() {
  // states
  const [isConfirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  // functions
  const handleDelete = () => {
    alert("deleting...");
  };

  return (
    <>
      <div>
        <Table className="bg-background">
          <TableHeader className="bg-accent">
            <TableRow>
              <TableHead className="w-[50px] text-center">N</TableHead>
              <TableHead className="text-center">Fan nomi</TableHead>
              <TableHead className="text-center">
                <Tooltip>
                  <TooltipTrigger>Sinflar</TooltipTrigger>
                  <TooltipContent>
                    <p>Shu fan o'tiladigan sinflar</p>
                  </TooltipContent>
                </Tooltip>
              </TableHead>
              <TableHead className="text-center">
                <Tooltip>
                  <TooltipTrigger>O'qituvchilar</TooltipTrigger>
                  <TooltipContent>
                    <p>Shu fanni o'qitadigan o'qituvchilar</p>
                  </TooltipContent>
                </Tooltip>
              </TableHead>
              <TableHead className="text-center">
                <Tooltip>
                  <TooltipTrigger>Kitoblar</TooltipTrigger>
                  <TooltipContent>
                    <p>Fan uchun berilgan kitoblar soni</p>
                  </TooltipContent>
                </Tooltip>
              </TableHead>
              <TableHead className="text-center">Kurslar</TableHead>
              <TableHead className="text-right w-[100px]">
                <Settings2 className="size-5 text-primary mx-auto" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialSubjects?.data?.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="w-[50px] text-center">
                  {index + 1}
                </TableCell>
                <TableCell className="w-[300px]">{item?.name}</TableCell>
                <TableCell className="w-[100px]">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="mx-auto" variant={"icon"} size={"sm"}>
                        {item?.classes?.length}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="grid grid-cols-4 gap-1 font-semibold">
                      {item?.classes?.map((classNumber, index) => (
                        <p key={index}>{classNumber}-sinf</p>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>
                <TableCell className="w-[150px]">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="mx-auto" variant={"icon"} size={"sm"}>
                        {item?.teachersList?.length}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="grid grid-cols-1 w-fit gap-1 font-semibold">
                      {item?.teachersList?.map((teacherName, index) => (
                        <p className="max-w-[200px] truncate" key={index}>
                          {teacherName}
                        </p>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>
                <TableCell className="text-center">{item?.bookCount}</TableCell>
                <TableCell>
                  {item?.courses ? (
                    <Badge className="py-1 px-4 w-full bg-primary/90 cursor-default">
                      Bor
                    </Badge>
                  ) : (
                    <Badge className="py-1 px-4 w-full bg-destructive cursor-default">
                      Yo'q
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="w-[100px] flex items-center justify-center gap-1">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={() => {
                            setSelectedItem(item);
                            setConfirmDeleteModalOpen(true);
                          }}
                          variant={"icon"}
                          size={"sm"}
                        >
                          <Trash2 className="size-5 text-destructive" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>O'chirish</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button disabled variant={"icon"} size={"sm"}>
                          <Edit2 className="size-5 text-primary" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Tahrirlash (tayyorlanmoqda)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* pagination */}
        <Pagination className="mt-5">
          <PaginationContent>
            <PaginationItem>
              <Button variant={"icon"} size={"sm"}>
                <PaginationPrevious href="#" />
              </Button>
            </PaginationItem>
            {[...Array(Math.min(2, initialSubjects.page))].map((_, i) => (
              <PaginationItem key={i}>
                <Button variant={"icon"} size={"sm"}>
                  <PaginationLink
                    href="#"
                    isActive={i + 1 === initialSubjects.page}
                  >
                    {i + 1}
                  </PaginationLink>
                </Button>
              </PaginationItem>
            ))}

            {initialSubjects.page > 5 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <Button variant={"icon"} size={"sm"}>
                <PaginationNext href="#" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {/* confirm delete modal */}
      <ConfirmDeleteModal
        deleteFunction={handleDelete}
        open={isConfirmDeleteModalOpen}
        setOpen={setConfirmDeleteModalOpen}
        setSelectedData={setSelectedItem}
        title={`${selectedItem?.name}ni o'chirishni tasdiqlash`}
        willArchive={false}
      />
    </>
  );
}
