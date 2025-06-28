import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import React from "react";
import { GotUserTypes } from "@/types/user.types";

interface PermissionsViewModalPropsModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: GotUserTypes | null;
  setData: React.Dispatch<React.SetStateAction<GotUserTypes | null>>;
}

export default function PermissionsViewModal({
  data,
  open,
  setData,
  setOpen,
}: PermissionsViewModalPropsModal) {
  return (
    <>
      <Dialog
        open={open}
        onOpenChange={() => {
          setOpen(false);
          setData(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Foydalanuvchi uchun berilagan ruxsatlar</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {data?.permissions?.map((item: any, index) => (
              <span>{item}</span>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
