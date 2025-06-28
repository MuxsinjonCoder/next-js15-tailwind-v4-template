import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FormLabel } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";

interface CompleteTaskModalPropsTypes {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedData: any;
  setSelectedData: React.Dispatch<React.SetStateAction<any | null>>;
}

export default function AddUserToTaskModal({
  open,
  selectedData,
  setOpen,
  setSelectedData,
}: CompleteTaskModalPropsTypes) {
  // states
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [hasError, setHasError] = useState(false);

  // functions
  const handleAttechUserToTask = (values: any) => {
    console.log("values", values);
    if (selectedUser) {
      alert(`${selectedUser?.fullName} topshiriqga biriktirilmoqda`);
      setHasError(false);
      setSelectedUser(null);
      setSelectedData(null);
    } else {
      setHasError(true);
    }
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
            <DialogTitle className="text-center">Xodim biriktirish</DialogTitle>
          </DialogHeader>
          <div>
            <form>
              <Label className="mb-2">Xodimlar</Label>
              <Select
                onValueChange={(val) => setSelectedUser({ fullName: val })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Xodimni tanlang" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Xodim1">Xodim1</SelectItem>
                  <SelectItem value="Xodim2">Xodim2</SelectItem>
                  <SelectItem value="Xodim3">Xodim3</SelectItem>
                </SelectContent>
              </Select>
              {hasError && (
                <p className="text-sm text-destructive mt-2">
                  Xodimni tanlash majburiy
                </p>
              )}

              <div className="flex items-center justify-between gap-5 w-full mt-10">
                <Button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setSelectedUser(null);
                  }}
                  variant={"secondary"}
                >
                  Bekor qilish
                </Button>
                <Button onClick={handleAttechUserToTask} type="button">
                  Saqlash
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
