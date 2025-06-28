import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import React from "react";
import { GotUserTypes } from "@/types/user.types";
import { Badge } from "../ui/badge";
import { Roles } from "@/constants/roles";

interface OtherUserDatasModalPropsModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: GotUserTypes | null;
  setData: React.Dispatch<React.SetStateAction<GotUserTypes | null>>;
}

export default function OtherUserDatasModal({
  data,
  open,
  setData,
  setOpen,
}: OtherUserDatasModalPropsModal) {
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(false);
        setData(null);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Foydalanuvchining barcha ma'lumotlari</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">F.I.SH</p>
            <p className="font-medium">{data?.fullName}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Telefon raqami</p>
            <p className="font-medium">{data?.phoneNumber}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Role</p>
            <p className="font-medium">
              {data?.roleName && Object.keys(Roles).includes(data.roleName) ? (
                <Badge className="border-primary" variant={"secondary"}>
                  {Roles[data?.roleName as keyof typeof Roles]}
                </Badge>
              ) : (
                <Badge variant={"destructive"}>Rol topilmadi</Badge>
              )}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Permissions</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
              {data?.permissions?.map((item: string, index: number) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
