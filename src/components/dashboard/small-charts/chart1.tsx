"use client";

import { TrendingUp } from "lucide-react";
import {
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  Label,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { name: "payments", amount: 23450, fill: "var(--primary)" },
];

const chartConfig = {
  payments: {
    label: "To‘lovlar",
  },
} satisfies ChartConfig;

export function SmallChart1() {
  return (
    <Card className="flex flex-col rounded-md border border-border">
      <CardHeader className="items-center pb-2 text-center">
        <CardTitle className="text-lg font-semibold text-foreground">
          Oylik to‘lovlar
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Yanvar - May 2025
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="amount" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
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
                          className="fill-foreground text-[28px] font-bold"
                        >
                          ${chartData[0].amount.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-sm"
                        >
                          To‘lovlar
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex flex-col gap-1 px-4 pb-4 text-sm">
        <div className="flex items-center gap-2 font-medium text-green-600">
          <TrendingUp className="h-4 w-4" />
          <span>Bu oyda 5.2% o‘sish</span>
        </div>
        <div className="text-muted-foreground">
          So‘nggi 6 oy ichidagi umumiy to‘lovlar
        </div>
      </CardFooter>
    </Card>
  );
}
