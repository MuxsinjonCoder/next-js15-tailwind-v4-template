import { Card } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools || Iftixor maktabi ERP tizimi",
  description:
    "Iftixor maktabining ERP tizimi. ERP tizim barcha o'quvchi va o'qituvchilar, xodimlar va ishchilar, fan to'garaklari va o'quvchilar reytinggi, ota-onalar o'z farzandlarini nazorat qilishi osonlashishi uchun xizmat qiladi",
};

export default function ToolsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <Card
        className={`bg-primary text-primary-foreground text-center font-bold p-4 capitalize`}
      >
        primary
      </Card>
      <Card
        className={`bg-primary-foreground text-primary text-center font-bold p-4 capitalize`}
      >
        primary-foreground
      </Card>
      <Card
        className={`bg-background text-foreground text-center font-bold p-4 capitalize`}
      >
        background
      </Card>
      <Card
        className={`bg-foreground text-background text-center font-bold p-4 capitalize`}
      >
        foreground
      </Card>
      <Card
        className={`bg-card text-card-foreground text-center font-bold p-4 capitalize`}
      >
        card
      </Card>
      <Card
        className={`bg-card-foreground text-card text-center font-bold p-4 capitalize`}
      >
        card-foreground
      </Card>
      <Card
        className={`bg-popover text-popover-foreground text-center font-bold p-4 capitalize`}
      >
        popover
      </Card>
      <Card
        className={`bg-popover-foreground text-popover text-center font-bold p-4 capitalize`}
      >
        popover-foreground
      </Card>
      <Card
        className={`bg-secondary text-secondary-foreground text-center font-bold p-4 capitalize`}
      >
        secondary
      </Card>
      <Card
        className={`bg-secondary-foreground text-secondary text-center font-bold p-4 capitalize`}
      >
        secondary-foreground
      </Card>
      <Card
        className={`bg-muted text-muted-foreground text-center font-bold p-4 capitalize`}
      >
        muted
      </Card>
      <Card
        className={`bg-muted-foreground text-muted text-center font-bold p-4 capitalize`}
      >
        muted-foreground
      </Card>
      <Card
        className={`bg-accent text-accent-foreground text-center font-bold p-4 capitalize`}
      >
        accent
      </Card>
      <Card
        className={`bg-accent-foreground text-accent text-center font-bold p-4 capitalize`}
      >
        accent-foreground
      </Card>
      <Card
        className={`bg-destructive text-background text-center font-bold p-4 capitalize`}
      >
        destructive
      </Card>
      <Card
        className={`bg-border text-primary text-center font-bold p-4 capitalize`}
      >
        border
      </Card>
      <Card
        className={`bg-input text-primary text-center font-bold p-4 capitalize`}
      >
        input
      </Card>
      <Card
        className={`bg-ring text-primary text-center font-bold p-4 capitalize`}
      >
        ring
      </Card>
      <Card
        className={`bg-chart-1 text-background text-center font-bold p-4 capitalize`}
      >
        chart-1
      </Card>
      <Card
        className={`bg-chart-2 text-background text-center font-bold p-4 capitalize`}
      >
        chart-2
      </Card>
      <Card
        className={`bg-chart-3 text-background text-center font-bold p-4 capitalize`}
      >
        chart-3
      </Card>
      <Card
        className={`bg-chart-4 text-background text-center font-bold p-4 capitalize`}
      >
        chart-4
      </Card>
      <Card
        className={`bg-sidebar text-sidebar-foreground text-center font-bold p-4 capitalize`}
      >
        sidebar
      </Card>
      <Card
        className={`bg-sidebar-foreground text-sidebar text-center font-bold p-4 capitalize`}
      >
        sidebar-foreground
      </Card>
      <Card
        className={`bg-sidebar-primary text-sidebar-primary-foreground text-center font-bold p-4 capitalize`}
      >
        sidebar-primary
      </Card>
      <Card
        className={`bg-sidebar-primary-foreground text-sidebar-primary text-center font-bold p-4 capitalize`}
      >
        sidebar-primary-foreground
      </Card>
      <Card
        className={`bg-sidebar-accent text-sidebar-accent-foreground text-center font-bold p-4 capitalize`}
      >
        sidebar-accent
      </Card>
      <Card
        className={`bg-sidebar-accent-foreground text-sidebar-accent text-center font-bold p-4 capitalize`}
      >
        sidebar-accent-foreground
      </Card>
      <Card
        className={`bg-sidebar-border text-primary text-center font-bold p-4 capitalize`}
      >
        sidebar-border
      </Card>
      <Card
        className={`bg-sidebar-ring text-primary text-center font-bold p-4 capitalize`}
      >
        sidebar-ring
      </Card>
      <Card
        className={`bg-info text-primary text-center font-bold p-4 capitalize`}
      >
        info
      </Card>
      <Card
        className={`bg-warning text-primary text-center font-bold p-4 capitalize`}
      >
        warning
      </Card>
      <Card
        className={`bg-success text-primary text-center font-bold p-4 capitalize`}
      >
        success
      </Card>
      <Card
        className={`bg-orange text-primary text-center font-bold p-4 capitalize`}
      >
        orange
      </Card>
      <Card
        className={`bg-pink text-primary text-center font-bold p-4 capitalize`}
      >
        pink
      </Card>
      <Card
        className={`bg-blue text-background text-center font-bold p-4 capitalize`}
      >
        blue
      </Card>
    </div>
  );
}
