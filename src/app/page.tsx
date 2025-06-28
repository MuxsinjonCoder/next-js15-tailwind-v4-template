import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BigChart } from "@/components/dashboard/big-chart";
import DashboardNumbers from "@/components/dashboard/numbers";
import { SmallChart1 } from "@/components/dashboard/small-charts/chart1";
import { SmallChart2 } from "@/components/dashboard/small-charts/chart2";
import { SmallChart3 } from "@/components/dashboard/small-charts/chart3";

export default function Home() {
  return (
    <>
      <h1 className="text-xl md:text-2xl xl:text-3xl font-bold">
        Dashboard title
      </h1>
      <div className="my-5">
        <DashboardNumbers />
      </div>
      <Card>
        <CardContent className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <SmallChart1 />
            <SmallChart2 />
            <SmallChart3 />
          </div>
        </CardContent>
      </Card>
      <div className="my-5">
        <BigChart />
      </div>
    </>
  );
}
