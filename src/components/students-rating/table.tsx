"use client";

import { useState } from "react";
import Filters from "../reuseable/filters";
import { Button } from "../ui/button";
import {
  ArrowUpFromDot,
  ChevronsDown,
  ChevronsUp,
  Paintbrush,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const initialStudentsRating = [
  { id: 1001, fullName: "Sultonov Alisher", className: "9A", coins: 1500 },
  { id: 1002, fullName: "Karimova Dildora", className: "10B", coins: 1480 },
  { id: 1003, fullName: "Rustamov Murod", className: "11A", coins: 1460 },
  { id: 1004, fullName: "Abdullaev Ibrohim", className: "9B", coins: 1440 },
  { id: 1005, fullName: "Toirova Gulbahor", className: "8A", coins: 1435 },
  { id: 1006, fullName: "Shukurov Islom", className: "7B", coins: 1410 },
  { id: 1007, fullName: "Xolmatova Dilnoza", className: "9A", coins: 1390 },
  { id: 1008, fullName: "Mirzayev Sardor", className: "10C", coins: 1385 },
  { id: 1009, fullName: "Zokirova Malika", className: "11B", coins: 1360 },
  { id: 1010, fullName: "Ismoilov Farhod", className: "8B", coins: 1330 },
  { id: 1011, fullName: "Nazarova Rayhona", className: "9C", coins: 1325 },
  { id: 1012, fullName: "Ergashev Alibek", className: "7A", coins: 1320 },
  { id: 1013, fullName: "Olimova Mohira", className: "10A", coins: 1312 },
  { id: 1014, fullName: "Rashidov Odil", className: "8C", coins: 1300 },
  { id: 1015, fullName: "Jabborova Shaxnoza", className: "11C", coins: 1295 },
  { id: 1016, fullName: "Tursunov Doston", className: "9B", coins: 1280 },
  { id: 1017, fullName: "Yusufova Durdona", className: "10B", coins: 1270 },
  { id: 1018, fullName: "Bekmurodov Aziz", className: "7C", coins: 1265 },
  { id: 1019, fullName: "Xusanov Anvar", className: "8A", coins: 1255 },
  { id: 1020, fullName: "Saidova Munisa", className: "11A", coins: 1240 },
  { id: 1021, fullName: "G‘aniyeva Zilola", className: "9C", coins: 1230 },
  { id: 1022, fullName: "Nodirov Zafar", className: "10C", coins: 1225 },
  { id: 1023, fullName: "Qudratov Shoxrux", className: "7B", coins: 1210 },
  { id: 1024, fullName: "Sattarova Malohat", className: "6A", coins: 1200 },
  { id: 1025, fullName: "Sharipov Umid", className: "6B", coins: 1195 },
  { id: 1026, fullName: "Bozorov Sherzod", className: "6C", coins: 1185 },
  { id: 1027, fullName: "Murodova Mohina", className: "7A", coins: 1170 },
];

export default function StudentsRatingTable() {
  // states
  const [selectedClassName, setSelectedClassName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // functions
  const handleClearFilters = () => {
    setSelectedClassName("");
  };

  return (
    <>
      <div className="w-full md:max-w-[220px] md:ml-auto md:-mt-12">
        <Button onClick={handleClearFilters}>
          <Paintbrush className="size-5" /> Filterlarni tozalash
        </Button>
      </div>
      <div className="w-full my-5">
        <Filters
          classNameSelectFilter={true}
          setSelectedClassName={setSelectedClassName}
          selectedClassName={selectedClassName}
          search={true}
          setSearchTerm={setSearchTerm}
          tooltipText="O'quvchi ismi bo'yicha qidirish"
        />
      </div>
      <div className="mt-5">
        <Table>
          <TableHeader>
            <TableRow className="bg-background hover:bg-background">
              <TableHead className="text-center">N</TableHead>
              <TableHead className="text-center">O'quvchininig ismi</TableHead>
              <TableHead className="text-center">Sinfi</TableHead>
              <TableHead className="text-center">"Coins"</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialStudentsRating?.map((student, index) => (
              <TableRow
                className={
                  index < 3
                    ? "bg-green-400 hover:bg-green-300"
                    : index > 2 && index < 10
                    ? "bg-yellow-100 hover:bg-yellow-50"
                    : "bg-background"
                }
                key={index}
              >
                <TableCell className="font-bold text-center w-[80px]">
                  {index + 1}/
                  <span className="text-[10px]">
                    {initialStudentsRating?.length}
                  </span>
                </TableCell>
                <TableCell className="w-[300px] md:w-[600px]">
                  <p className="font-semibold w-[95%] truncate">
                    {student?.fullName}
                  </p>
                  <p className="font-bold opacity-70 text-xs">
                    ID: {student?.id}
                  </p>
                </TableCell>
                <TableCell className="text-center w-[120px] font-medium">
                  {student?.className}
                </TableCell>
                <TableCell className="text-center font-bold w-[200px]">
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="flex items-center justify-center gap-2">
                        <p>{student?.coins}</p>
                        <div>
                          {student?.coins > 1350 ? (
                            <ChevronsUp
                              className={
                                index < 3
                                  ? "text-backgroundsize-5"
                                  : "text-green-600 size-5"
                              }
                            />
                          ) : (
                            <ChevronsDown className="text-destructive size-5" />
                          )}
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      Oxirgi 24 soat uchun coin yig'gan bo'lsa tepaga bo'lmasa
                      pastga icon ko'rinadi
                    </TooltipContent>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
