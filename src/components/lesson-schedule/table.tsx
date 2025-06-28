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
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const initialData = [
  {
    day: "DU",
    data: [
      {
        hasClass: true,
        className: "6A",
        subjectName: "Matematika",
        classRoom: "25",
      },
      {
        hasClass: true,
        className: "6A",
        subjectName: "Ingliz tili",
        classRoom: "14",
      },
      {
        hasClass: true,
        className: "6A",
        subjectName: "Fizika",
        classRoom: "18",
      },
      {
        hasClass: true,
        className: "6A",
        subjectName: "Biologiya",
        classRoom: "12",
      },
      {
        hasClass: true,
        className: "6A",
        subjectName: "Geometriya",
        classRoom: "19",
      },
      {
        hasClass: true,
        className: "6A",
        subjectName: "Texnologiya",
        classRoom: "22",
      },
    ],
  },
  {
    day: "SE",
    data: [
      {
        hasClass: true,
        className: "7B",
        subjectName: "Fizika",
        classRoom: "30",
      },
      { hasClass: false, className: "", subjectName: "", classRoom: "" },
      {
        hasClass: true,
        className: "7B",
        subjectName: "Kimyo",
        classRoom: "31",
      },
      {
        hasClass: true,
        className: "7B",
        subjectName: "Ona tili",
        classRoom: "11",
      },
      { hasClass: false, className: "", subjectName: "", classRoom: "" },
      {
        hasClass: true,
        className: "7B",
        subjectName: "Chizmachilik",
        classRoom: "26",
      },
    ],
  },
  {
    day: "CH",
    data: [
      { hasClass: false, className: "", subjectName: "", classRoom: "" },
      {
        hasClass: true,
        className: "8C",
        subjectName: "Kimyo",
        classRoom: "28",
      },
      {
        hasClass: true,
        className: "8C",
        subjectName: "Tarix",
        classRoom: "24",
      },
      { hasClass: false, className: "", subjectName: "", classRoom: "" },
      {
        hasClass: true,
        className: "8C",
        subjectName: "Adabiyot",
        classRoom: "17",
      },
      {
        hasClass: true,
        className: "8C",
        subjectName: "Geografiya",
        classRoom: "29",
      },
    ],
  },
  {
    day: "PA",
    data: [
      {
        hasClass: true,
        className: "9A",
        subjectName: "Biologiya",
        classRoom: "20",
      },
      {
        hasClass: true,
        className: "9A",
        subjectName: "Tarix",
        classRoom: "21",
      },
      {
        hasClass: true,
        className: "9A",
        subjectName: "Matematika",
        classRoom: "10",
      },
      { hasClass: false, className: "", subjectName: "", classRoom: "" },
      {
        hasClass: true,
        className: "9A",
        subjectName: "Fizika",
        classRoom: "27",
      },
      { hasClass: false, className: "", subjectName: "", classRoom: "" },
    ],
  },
  {
    day: "JU",
    data: [
      { hasClass: false, className: "", subjectName: "", classRoom: "" },
      { hasClass: false, className: "", subjectName: "", classRoom: "" },
      {
        hasClass: true,
        className: "6B",
        subjectName: "Informatika",
        classRoom: "32",
      },
      { hasClass: false, className: "", subjectName: "", classRoom: "" },
      {
        hasClass: true,
        className: "6B",
        subjectName: "Ona tili",
        classRoom: "13",
      },
      { hasClass: false, className: "", subjectName: "", classRoom: "" },
    ],
  },
];

export default function LessonScheduleTable() {
  const tableRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const downloadTableAsImage = async () => {
    if (!tableRef.current) return;

    try {
      // Dynamically import html2canvas
      const html2canvas = (await import("html2canvas")).default;

      // Create canvas from the table element
      const canvas = await html2canvas(tableRef.current, {
        backgroundColor: "#ffffff",
        scale: 2, // Higher quality
        useCORS: true,
        allowTaint: true,
        logging: false,
        ignoreElements: (element) => {
          // Skip elements that might cause OKLCH parsing issues
          return element.tagName === "STYLE" || element.tagName === "LINK";
        },
        onclone: (clonedDoc) => {
          // Remove CSS custom properties that use OKLCH
          const style = clonedDoc.createElement("style");
          style.textContent = `
          * {
            --background: 0 0% 100% !important;
            --foreground: 222.2 84% 4.9% !important;
            --card: 0 0% 100% !important;
            --card-foreground: 222.2 84% 4.9% !important;
            --popover: 0 0% 100% !important;
            --popover-foreground: 222.2 84% 4.9% !important;
            --primary: 222.2 47.4% 11.2% !important;
            --primary-foreground: 210 40% 98% !important;
            --secondary: 210 40% 96% !important;
            --secondary-foreground: 222.2 84% 4.9% !important;
            --muted: 210 40% 96% !important;
            --muted-foreground: 215.4 16.3% 46.9% !important;
            --accent: 210 40% 96% !important;
            --accent-foreground: 222.2 84% 4.9% !important;
            --destructive: 0 84.2% 60.2% !important;
            --destructive-foreground: 210 40% 98% !important;
            --border: 214.3 31.8% 91.4% !important;
            --input: 214.3 31.8% 91.4% !important;
            --ring: 222.2 84% 4.9% !important;
            --radius: 0.5rem !important;
          }
          .bg-background { background-color: hsl(0 0% 100%) !important; }
          .text-primary { color: hsl(222.2 47.4% 11.2%) !important; }
          .bg-secondary\\/20 { background-color: hsl(210 40% 96% / 0.2) !important; }
          .bg-destructive\\/20 { background-color: hsl(0 84.2% 60.2% / 0.2) !important; }
          .text-destructive { color: hsl(0 84.2% 60.2%) !important; }
          .hover\\:bg-background:hover { background-color: hsl(0 0% 100%) !important; }
          .hover\\:bg-secondary\\/20:hover { background-color: hsl(210 40% 96% / 0.2) !important; }
        `;
          clonedDoc.head.appendChild(style);
        },
      });

      // Convert canvas to blob
      canvas.toBlob((blob) => {
        if (!blob) return;

        // Create download link
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `dars-jadvali-${
          new Date().toISOString().split("T")[0]
        }.png`;

        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Clean up
        URL.revokeObjectURL(url);
      }, "image/png");
    } catch (error) {
      console.error("Error downloading table as image:", error);
    }
  };

  return (
    <div className="-mt-12">
      <div className="max-w-[300px] ml-auto mb-10">
        <Button onClick={downloadTableAsImage}>
          <Download className="size-5 mr-2" />
          Yuklab olish
        </Button>
      </div>
      <div ref={tableRef}>
        <Table className="bg-background">
          <TableHeader>
            <TableRow className="bg-background hover:bg-background text-center">
              <TableHead className="size-[20px]"></TableHead>
              <TableHead className="size-[70px]">
                <span className="flex flex-col gap-1 items-center">
                  <span className="font-bold text-xl text-primary">1</span>
                  <span className="opacity-70">8:45-9:30</span>
                </span>
              </TableHead>
              <TableHead className="size-[70px]">
                <span className="flex flex-col gap-1 items-center">
                  <span className="font-bold text-xl text-primary">2</span>
                  <span className="opacity-70">9:50-10-35</span>
                </span>
              </TableHead>
              <TableHead className="size-[70px]">
                <span className="flex flex-col gap-1 items-center">
                  <span className="font-bold text-xl text-primary">3</span>
                  <span className="opacity-70">10:40-11:25</span>
                </span>
              </TableHead>
              <TableHead className="size-[70px]">
                <span className="flex flex-col gap-1 items-center">
                  <span className="font-bold text-xl text-primary">4</span>
                  <span className="opacity-70">11:30-12:15</span>
                </span>
              </TableHead>
              <TableHead className="size-[70px]">
                <span className="flex flex-col gap-1 items-center">
                  <span className="font-bold text-xl text-primary">5</span>
                  <span className="opacity-70">12:20-13:05</span>
                </span>
              </TableHead>
              <TableHead className="size-[70px]">
                <span className="flex flex-col gap-1 items-center">
                  <span className="font-bold text-xl text-primary">6</span>
                  <span className="opacity-70">13:35-14:20</span>
                </span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialData?.map((item, index) => (
              <TableRow key={index} className="h-32 hover:bg-secondary/20">
                <TableCell className="font-bold text-2xl max-w-[50px] min-w-[50px] w-[50px] text-center">
                  {item?.day}
                </TableCell>
                {item?.data?.map((classItem, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      {/* /lesson-schedule/attendance */}
                      <TableCell
                        className={`min-w-[200px] max-w-[200px] w-[200px] relative ${
                          classItem?.hasClass
                            ? "cursor-pointer"
                            : "bg-destructive/20 text-center"
                        }`}
                      >
                        {classItem?.hasClass ? (
                          <div className="h-full flex flex-col justify-between items-start gap-2">
                            <div className="flex items-center justify-between w-full gap-2">
                              <div className="truncate font-semibold max-w-[80%]">
                                {classItem?.subjectName}
                              </div>
                              <div className="font-semibold">
                                {classItem?.classRoom}-xona
                              </div>
                            </div>
                            <div className="w-full flex justify-center items-center">
                              <span className="text-3xl mt-5 font-bold text-primary">
                                {classItem?.className}
                              </span>
                            </div>
                          </div>
                        ) : (
                          <span className="text-destructive font-semibold">
                            Dars yo'q
                          </span>
                        )}
                      </TableCell>
                    </TooltipTrigger>
                    <TooltipContent>
                      {classItem?.hasClass ? (
                        <div className="flex flex-col items-start gap-1">
                          <span>Dars: {classItem?.subjectName}</span>
                          <span>Sinf xona:{classItem?.classRoom}</span>
                          <div className="flex items-center justify-baseline gap-2 w-full mt-5">
                            <Link href={"/lesson-schedule/student-assessment"}>
                              <Button
                                className="text-xs w-full py-1 px-4 hover:bg-background hover:text-primary"
                                variant={"outline"}
                              >
                                Baholash
                              </Button>
                            </Link>
                            <Link href={"/lesson-schedule/attendance"}>
                              <Button
                                className="text-xs w-full py-1 px-4 hover:bg-background hover:text-primary"
                                variant={"outline"}
                              >
                                Davomat.
                              </Button>
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <span className="text-destructive font-semibold">
                          Bugunga dars yo'q
                        </span>
                      )}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
