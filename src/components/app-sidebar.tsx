"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { SidebarItems } from "@/constants/sidebar-data";
import { Separator } from "./ui/separator";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Rows3 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { loadState } from "@/config/storage";

export function AppSidebar() {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [user, setUser] = useState(true);

  const path = usePathname();
  const router = useRouter();
  const userData = loadState("userData");

  useEffect(() => {
    SidebarItems.forEach((item, index) => {
      if (item.subItems) {
        const isSubItemActive = item.subItems.some(
          (subItem) => subItem.url === pathname
        );
        if (isSubItemActive) {
          setOpenIndex(index);
        }
      }
    });
  }, [pathname]);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const SidebarContentComponent = () => (
    <>
      <SidebarHeader>
        <div className="relative">
          <Link onClick={() => setDrawerOpen(false)} href={"/"}>
            <Image width={150} height={70} src={"/logo.png"} alt="logo" />
          </Link>
          <span className="opacity-50 absolute top-0 right-10 font-bold text-xs">
            ERP tizimi
          </span>
        </div>
        <Separator className="mt-5" />
      </SidebarHeader>

      <SidebarContent className="w-[250px]">
        {user && (
          <SidebarGroup className="flex flex-col gap-[5px] pr-5 mt-5">
            {SidebarItems.map((item, index) => {
              const isSubItemActive = item.subItems?.some(
                (subItem) =>
                  subItem.url === pathname ||
                  (subItem.url !== "/" && pathname?.startsWith(subItem.url))
              );

              const isItemActive =
                pathname === item.url ||
                (item.url !== "/" && pathname?.startsWith(String(item.url)));

              return (
                <div key={index}>
                  {item.subItems ? (
                    <>
                      <Button
                        variant={isSubItemActive ? "navHover" : "navHover"}
                        onClick={() => handleToggle(index)}
                        className="w-full flex justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <item.icon className="w-4 h-4" />
                          <span>{item.title}</span>
                        </div>
                        <ChevronDown
                          className={clsx(
                            "w-4 h-4 transition-transform",
                            openIndex === index && "rotate-180"
                          )}
                        />
                      </Button>
                      <AnimatePresence>
                        {item.subItems &&
                          (openIndex === index || isSubItemActive) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden mt-2 flex flex-col gap-[5px]"
                            >
                              {item.subItems.map((subItem, subIndex) => {
                                const isActive = pathname === subItem.url;
                                return (
                                  <Link
                                    key={subIndex}
                                    href={subItem.url}
                                    className="w-full"
                                    onClick={() => setDrawerOpen(false)}
                                  >
                                    <Button
                                      variant={isActive ? "nav" : "navHover"}
                                      className="w-full flex pl-7 justify-start gap-2 text-sm"
                                    >
                                      <subItem.icon className="w-4 h-4" />
                                      <span>{subItem.title}</span>
                                    </Button>
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.url}
                      className="w-full"
                      onClick={() => setDrawerOpen(false)}
                    >
                      <Button
                        variant={isItemActive ? "nav" : "navHover"}
                        className="w-full flex cursor-pointer justify-start gap-2"
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </Button>
                    </Link>
                  )}
                </div>
              );
            })}
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter />
    </>
  );

  return (
    <>
      <div className="xl:hidden fixed top-5 left-5 z-50">
        <Button onClick={() => setDrawerOpen(true)} size="sm" variant="icon">
          <Rows3 className="text-primary size-5" />
        </Button>
      </div>

      <Sheet open={isDrawerOpen} onOpenChange={setDrawerOpen}>
        <SheetContent
          side="left"
          className="p-0 w-[16rem] bg-sidebar text-sidebar-foreground"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col h-full">
            {SidebarContentComponent()}
          </div>
        </SheetContent>
      </Sheet>

      <div className="hidden xl:block">
        <Sidebar>{SidebarContentComponent()}</Sidebar>
      </div>
    </>
  );
}
