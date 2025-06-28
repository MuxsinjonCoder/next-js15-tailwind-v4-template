"use client";

import { Users, BookOpen, DollarSign, BookUser } from "lucide-react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";

const stats = [
  {
    label: "O‘qituvchilar",
    value: "35",
    icon: <BookUser className="w-5 h-5 text-primary" />,
  },
  {
    label: "O‘quvchilar",
    value: "1 200",
    icon: <Users className="w-5 h-5 text-primary" />,
  },
  {
    label: "Kurslar",
    value: "56",
    icon: <BookOpen className="w-5 h-5 text-primary" />,
  },
  {
    label: "Oylik to‘lovlar",
    value: "$23,450",
    icon: <DollarSign className="w-5 h-5 text-primary" />,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function DashboardNumbers() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          whileHover={{ scale: 1.03 }}
          className="transition-transform"
        >
          <Card className="p-0 m-0 shadow-sm hover:shadow-lg transition-shadow rounded-md">
            <CardHeader className="py-4 px-5 flex items-center justify-start gap-4">
              <div className="bg-primary/10 text-primary rounded-full p-2 border border-primary/20">
                {stat.icon}
              </div>
              <CardTitle className="flex flex-col items-start gap-1">
                <span className="text-sm text-muted-foreground tracking-wide">
                  {stat.label}
                </span>
                <span className="text-xl font-bold text-foreground">
                  {stat.value}
                </span>
              </CardTitle>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
