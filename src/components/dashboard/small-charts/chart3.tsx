"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

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
  { category: "science", students: 275, fill: "var(--chart-1)" },
  { category: "math", students: 200, fill: "var(--chart-2)" },
  { category: "literature", students: 287, fill: "var(--chart-3)" },
  { category: "history", students: 173, fill: "var(--chart-4)" },
  { category: "other", students: 190, fill: "var(--primary)" },
];

const chartConfig = {
  students: {
    label: "Talabalar",
  },
  science: {
    label: "Fan",
    color: "hsl(var(--chart-1))",
  },
  math: {
    label: "Matematika",
    color: "hsl(var(--chart-2))",
  },
  literature: {
    label: "Adabiyot",
    color: "hsl(var(--chart-3))",
  },
  history: {
    label: "Tarix",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Boshqa",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function SmallChart3() {
  const totalStudents = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.students, 0);
  }, []);

  return (
    <Card className="flex flex-col rounded-md">
      <CardHeader className="items-center pb-0">
        <CardTitle>Fanlar Bo'yicha Talabalar</CardTitle>
        <CardDescription>Yanvar - Iyun 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="students"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalStudents.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Talabalar
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Bu oy 5.2% ga o`sish <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Oxirgi 6 oydagi umumiy talabalar soni
        </div>
      </CardFooter>
    </Card>
  );
}
