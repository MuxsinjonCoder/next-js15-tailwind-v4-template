"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle, Trash2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { useState } from "react";
import NoData from "../ui/noData";
import Link from "next/link";
import { Loader } from "../ui/loader";

const notificationTypeStyles: Record<string, string> = {
  TEST_SCHEDULED: "bg-yellow-100 hover:bg-yellow-200 text-primary",
  TEST_STARTED: "bg-blue-100 hover:bg-blue-200 text-primary",
  TEST_COMPLETED: "bg-green-100 hover:bg-green-200 text-primary",
  INTERVIEW_SCHEDULED: "bg-indigo-100 hover:bg-indigo-200 text-primary",
  INTERVIEW_RESULT: "bg-purple-100 hover:bg-purple-200 text-primary",
  DEMO_LESSON_SCHEDULED: "bg-orange-100 hover:bg-orange-200 text-primary",
  DEMO_LESSON_RESULT: "bg-emerald-100 hover:bg-emerald-200 text-primary",
};

const notificationLabels: Record<string, string> = {
  TEST_SCHEDULED: "Test berildi",
  TEST_STARTED: "Test boshlandi",
  TEST_COMPLETED: "Test yakunlandi",
  INTERVIEW_SCHEDULED: "Intervyu berildi",
  INTERVIEW_RESULT: "Intervyu natijasi",
  DEMO_LESSON_SCHEDULED: "Sinov darsi",
  DEMO_LESSON_RESULT: "Sinov darsi natijasi",
};

// Dummy data
const dummyNotifications = [
  {
    id: 1,
    title: "Matematika testi",
    content: "Matematika bo'yicha test 10-may, soat 14:00 da bo'lib o'tadi.",
    notificationStatus: "TEST_SCHEDULED",
    read: false,
  },
  {
    id: 2,
    title: "Test boshlandi",
    content: "Matematika testi hozir boshlandi.",
    notificationStatus: "TEST_STARTED",
    read: true,
  },
  {
    id: 3,
    title: "Intervyu rejalashtirildi",
    content: "Intervyu 12-may, soat 10:00 da bo'ladi.",
    notificationStatus: "INTERVIEW_SCHEDULED",
    read: false,
  },
  {
    id: 4,
    title: "Intervyu natijasi",
    content: "Siz intervyudan muvaffaqiyatli o'tdingiz!",
    notificationStatus: "INTERVIEW_RESULT",
    read: false,
  },
  {
    id: 5,
    title: "Sinov darsi rejalashtirildi",
    content: "Sinov darsi 15-may, soat 16:00 da bo'ladi.",
    notificationStatus: "DEMO_LESSON_SCHEDULED",
    read: true,
  },
];

export default function NotificationsList() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [loadingStates, setLoadingStates] = useState<{
    [key: number]: { read: boolean; delete: boolean };
  }>({});

  const filteredData =
    activeFilter === "ALL"
      ? dummyNotifications
      : dummyNotifications.filter(
          (item) => item.notificationStatus === activeFilter
        );

  const handleDelete = (id: number) => {
    setLoadingStates((prev) => ({
      ...prev,
      [id]: { ...prev[id], delete: true },
    }));
    setTimeout(() => {
      setLoadingStates((prev) => ({
        ...prev,
        [id]: { ...prev[id], delete: false },
      }));
    }, 1000);
  };

  const handleReadNotification = (id: number) => {
    setLoadingStates((prev) => ({
      ...prev,
      [id]: { ...prev[id], read: true },
    }));
    setTimeout(() => {
      setLoadingStates((prev) => ({
        ...prev,
        [id]: { ...prev[id], read: false },
      }));
    }, 1000);
  };

  return (
    <>
      <Card className="min-w-[90vw] sm:min-w-[95vw] xl:min-w-full">
        <CardContent className="flex items-center gap-2 md:gap-5 flex-wrap">
          <Badge
            onClick={() => setActiveFilter("ALL")}
            className={cn(
              activeFilter === "ALL" ? "" : "bg-muted text-muted-foreground"
            )}
          >
            Barchasi
          </Badge>
          {Object.entries(notificationLabels).map(([key, label]) => (
            <Badge
              key={key}
              onClick={() => setActiveFilter(key)}
              className={cn(
                activeFilter === key ? "" : notificationTypeStyles[key]
              )}
            >
              {label}
            </Badge>
          ))}
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-5 mt-5">
        {filteredData?.length ? (
          filteredData.map((item, index) => (
            <Card
              key={index}
              className={cn(
                "min-w-[90vw] sm:min-w-[95vw] xl:min-w-full transition-all duration-300 hover:scale-[1.01]",
                item.notificationStatus === "TEST_SCHEDULED" && "bg-yellow-100",
                item.notificationStatus === "TEST_STARTED" && "bg-blue-100",
                item.notificationStatus === "TEST_COMPLETED" && "bg-green-100",
                item.notificationStatus === "INTERVIEW_SCHEDULED" &&
                  "bg-indigo-100",
                item.notificationStatus === "INTERVIEW_RESULT" &&
                  "bg-purple-100",
                item.notificationStatus === "DEMO_LESSON_SCHEDULED" &&
                  "bg-orange-100",
                item.notificationStatus === "DEMO_LESSON_RESULT" &&
                  "bg-emerald-100",
                item?.read ? "" : "border-4 border-primary"
              )}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                <Link
                  className="w-full"
                  href={
                    item.notificationStatus === "TEST_SCHEDULED"
                      ? "/user/tests"
                      : item.notificationStatus === "TEST_COMPLETED"
                      ? "/users"
                      : item.notificationStatus === "INTERVIEW_SCHEDULED"
                      ? "/user/dashboard"
                      : item.notificationStatus === "INTERVIEW_RESULT"
                      ? "/user/dashboard"
                      : item.notificationStatus === "DEMO_LESSON_SCHEDULED"
                      ? "/user/dashboard"
                      : item.notificationStatus === "DEMO_LESSON_RESULT"
                      ? "/user/dashboard"
                      : "/notifications"
                  }
                >
                  <CardHeader className="max-w-[90%]">
                    <CardTitle>{item?.title}</CardTitle>
                    <CardDescription>{item?.content}</CardDescription>
                  </CardHeader>
                </Link>
                <CardContent className="py-2 px-4 flex items-center gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          disabled={loadingStates[item?.id]?.read}
                          onClick={() =>
                            handleReadNotification(Number(item?.id))
                          }
                          variant={"icon"}
                          size={"sm"}
                        >
                          {loadingStates[item?.id]?.read ? (
                            <Loader />
                          ) : (
                            <CheckCircle className="text-primary" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        Bildirishnomani o'qildi deb belgilash
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          disabled={loadingStates[item?.id]?.delete}
                          onClick={() => handleDelete(Number(item?.id))}
                          variant={"icon"}
                          size={"sm"}
                        >
                          {loadingStates[item?.id]?.delete ? (
                            <Loader />
                          ) : (
                            <Trash2 className="text-destructive" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Bildirishnomani o'chirish</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardContent>
              </div>
            </Card>
          ))
        ) : (
          <NoData />
        )}
      </div>
    </>
  );
}
