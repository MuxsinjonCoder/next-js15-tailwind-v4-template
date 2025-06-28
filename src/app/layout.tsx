import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import Providers from "./providers";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { PenTool } from "lucide-react";
import Link from "next/link";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iftixor maktabi || ERP tizimi",
  description:
    "Iftixor maktabining ERP tizimi.ERP tizim barcha o'quvchi va o'qituvchilar, xodimlar va ishchilar, fan to'garaklari va o'quvchilar reytinggi, ota-onalar o'z farzandlarini nazorat qilishi osonlashishi uchun xizmat qiladi",
  icons: "/iftixor-logo-single.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Providers>
          <SidebarProvider>
            <main className="w-full">
              <div className="flex items-start justify-between">
                <div className="fixed left-0 top-0 bottom-0 z-50">
                  <AppSidebar />
                </div>
                <div className="w-full flex flex-col gap-5 px-5 py-5">
                  <div className="fixed top-0 right-0 left-0 xl:left-[251px] py-2 px-5 backdrop-blur-xl z-30">
                    <AppHeader />
                  </div>
                  <div className="xl:ml-[250px] mt-10">{children}</div>
                </div>
                <div className="fixed right-5 bottom-5 z-50">
                  <Link href={"/tools"}>
                    <Button
                      className="border-2 border-primary"
                      variant={"icon"}
                      size={"sm"}
                    >
                      <PenTool />
                    </Button>
                  </Link>
                </div>
              </div>
            </main>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
