"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Yanvar", students: 186, attendance: 80 },
  { month: "Fevral", students: 305, attendance: 200 },
  { month: "Mart", students: 237, attendance: 120 },
  { month: "Aprel", students: 73, attendance: 190 },
  { month: "May", students: 209, attendance: 130 },
  { month: "Iyun", students: 214, attendance: 140 },
  { month: "Iyul", students: 198, attendance: 150 },
  { month: "Avgust", students: 220, attendance: 160 },
  { month: "Sentyabr", students: 250, attendance: 170 },
  { month: "Oktyabr", students: 230, attendance: 180 },
  { month: "Noyabr", students: 210, attendance: 175 },
  { month: "Dekabr", students: 240, attendance: 190 },
];

const chartConfig = {
  students: {
    label: "Talabalar",
    color: "hsl(var(--chart-1))",
  },
  attendance: {
    label: "Davomat",
    color: "hsl(var(--chart-2))%",
  },
} satisfies ChartConfig;

export function BigChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Talabalar va Davomat Statistikasi</CardTitle>
        <CardDescription>Yanvar - Iyun 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="students" fill="var(--primary)" radius={4} />
            <Bar
              dataKey="attendance"
              fill="var(--color-attendance)"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Bu oy 5.2% ga o`sish <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Oxirgi 6 oydagi umumiy talabalar va davomat ko`rsatkichlari
        </div>
      </CardFooter>
    </Card>
  );
}
