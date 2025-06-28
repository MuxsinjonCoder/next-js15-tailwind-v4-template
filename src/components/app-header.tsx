"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Bell, LogOut, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { GotUsersTypes } from "@/types/user.types";
// import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback } from "./ui/avatar";
// import { useUser } from "@/context/UserContext";
// import { useGetUserNotifications } from "@/queries/notifications";
// import { GotNotificationTypes } from "@/types/notifications.types";

export default function AppHeader() {
  //   const [userData, setUserData] = useState<GotUsersTypes | null>(null);
  const [canPlaySound, setCanPlaySound] = useState(false);
  const [lastNotificationCount, setLastNotificationCount] = useState(0);

  const router = useRouter();
  //   const { toast } = useToast();
  //   const { user } = useUser();

  // queries
  //   const { data: notificationsList } = useGetUserNotifications(Number(user?.id));

  // helpers
  //   useEffect(() => {
  //     const storedUserData = localStorage.getItem("userData");
  //     if (storedUserData) {
  //       setUserData(JSON.parse(storedUserData));
  //     }
  //   }, []);

  useEffect(() => {
    // Enable sound only after user interaction
    const enableSound = () => {
      setCanPlaySound(true);
      document.removeEventListener("click", enableSound);
    };
    document.addEventListener("click", enableSound);
    return () => document.removeEventListener("click", enableSound);
  }, []);

  //   useEffect(() => {
  //     const unreadNotifications =
  //       notificationsList?.data?.filter(
  //         (item: GotNotificationTypes) => item.read === false
  //       ) || [];

  //     const unreadCount = unreadNotifications.length;

  //     if (
  //       canPlaySound &&
  //       unreadCount > 0 &&
  //       unreadCount !== lastNotificationCount
  //     ) {
  //       console.log("Attempting to play notification sound", {
  //         unreadCount,
  //         lastNotificationCount,
  //       });
  //       const audio = new Audio("/sounds/news-ting-6832.mp3");
  //       audio.play().catch((error) => console.error("Audio play failed:", error));
  //       setLastNotificationCount(unreadCount);
  //     }
  //   }, [notificationsList, canPlaySound, lastNotificationCount]);

  const logout = () => {
    router.replace("/auth/sign-in");
    // Cookies.remove("token");
    // Cookies.remove("tokenExpiration");
    window.location.reload();
    localStorage.clear();
    // toast({
    //   title: "Iltimos, tizimga qayta kirishingizni so'raymiz.",
    //   variant: "info",
    // });
  };

  return (
    <>
      <div>
        <div>{/* <AppBreadcrumb /> */}</div>
        <div className="flex items-center justify-end gap-5">
          <Link href={"/notifications"}>
            <Button className="relative" size={"sm"} variant={"icon"}>
              <Bell />
              {/* {notificationsList?.data?.some(
                (item: GotNotificationTypes) => item.read === false
              ) && ( */}
              <div className="rounded-full absolute top-0 right-0 bg-red-600 p-2"></div>
              {/* )} */}
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <Avatar>
                {/* <AvatarImage src="default-user.png" /> */}
                <AvatarFallback>MM</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-5 w-[220px]">
              <DropdownMenuLabel>
                {/* {userData?.fullName} */}
                Muxsinjon
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* {user?.role !== "CANDIDATE" || user?.role === "DEVELOPER" ? ( */}
              <Link href={"/profile"}>
                <DropdownMenuItem className="cursor-pointer">
                  <User className="size-5" /> Profil
                </DropdownMenuItem>
              </Link>
              {/* ) : null} */}
              {/* {user?.role === "CANDIDATE" ||
                (user?.role === "DEVELOPER" && ( */}
              <Link href={"/notifications"}>
                <DropdownMenuItem className="cursor-pointer">
                  <Bell className="size-5" /> Bildirishnomalar
                </DropdownMenuItem>
              </Link>
              {/* ))} */}
              <DropdownMenuItem asChild>
                <Button onClick={logout} variant={"danger"}>
                  Tizimdan chiqish
                  <LogOut className="size-5" />
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
