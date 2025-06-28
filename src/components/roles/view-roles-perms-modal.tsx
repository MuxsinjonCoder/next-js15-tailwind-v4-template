import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

interface ViewRolesModalPropsTypes {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

export default function ViewRolePermsModal({
  data,
  open,
  setData,
  setOpen,
}: ViewRolesModalPropsTypes) {
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
            <DialogTitle>Rol uchun berilgan ruxsatlar</DialogTitle>
          </DialogHeader>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quam,
            aut inventore consequuntur assumenda dolorem, voluptas quidem saepe
            ex provident fugit dignissimos quis autem soluta eum quia aperiam?
            Corrupti, error.
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
