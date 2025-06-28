import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import { Button } from "../ui/button";

interface CompleteTaskModalPropsTypes {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedData: any;
  setSelectedData: React.Dispatch<React.SetStateAction<any | null>>;
}

export default function CompleteTaskModal({
  open,
  selectedData,
  setOpen,
  setSelectedData,
}: CompleteTaskModalPropsTypes) {
  // functions
  const handleComplate = () => {
    alert("completing...");
  };
  return (
    <>
      <Dialog
        open={open}
        onOpenChange={() => {
          setOpen(false);
          setSelectedData(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">
              Topshiriqni yakunlash
            </DialogTitle>
            <DialogDescription className="mb-5 text-center">
              Topshiriq yakunlangandan keyin{" "}
              <span className="font-bold">"Yakunlangan topshiriqlar"</span>dan
              topishingiz kerak
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-between gap-5">
            <Button
              onClick={() => {
                setOpen(false);
              }}
              variant={"secondary"}
            >
              Bekor qilish
            </Button>
            <Button
              onClick={() => {
                handleComplate();
              }}
              variant={"default"}
            >
              Yakunlash
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
