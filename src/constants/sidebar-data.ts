import {
  LayoutDashboard,
  BookOpen,
  Settings,
  UserCircle,
  Table,
  Bell,
  Users,
  FileKey2,
  ListTodo,
  BookA,
  UserCheck,
  Star,
} from "lucide-react";

export const SidebarItems = [
  // admin pages
  {
    title: "Boshqaruv paneli",
    url: "/",
    type: "admin",
    icon: LayoutDashboard,
  },
  {
    title: "Dars jadvali",
    url: "/lesson-schedule",
    type: "admin",
    icon: Table,
  },
  {
    title: "Foydalanuvchilar",
    url: "/users",
    type: "admin",
    icon: Users,
  },
  {
    title: "Xodimlarga topshiriq",
    url: "/employees-todos",
    type: "admin",
    icon: ListTodo,
  },
  {
    title: "O'quvchilar reytingi",
    url: "/students-rating",
    type: "admin",
    icon: Star,
  },
  {
    title: "Sozlamalar",
    type: "admin",
    icon: Settings,
    subItems: [
      {
        title: "Profil",
        url: "/profile",
        icon: UserCircle,
      },
      {
        title: "Bildirishnomalar",
        url: "/notifications",
        icon: Bell,
      },
      {
        title: "Rollar",
        url: "/roles",
        icon: FileKey2,
      },
      {
        title: "Fanlar",
        url: "/subjects",
        icon: BookA,
      },
    ],
  },
];
