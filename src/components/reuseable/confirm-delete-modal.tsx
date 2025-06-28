import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import { Button } from "../ui/button";

  interface ConfirmDeleteModalPropsTypes {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: React.ReactNode;
    deleteFunction: () => void;
    willArchive: boolean;
    setSelectedData: React.Dispatch<React.SetStateAction<any | null>>;
  }

const ConfirmDeleteModal = ({
  deleteFunction,
  open,
  setOpen,
  title,
  willArchive,
  setSelectedData,
}: ConfirmDeleteModalPropsTypes) => {
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(false);
        setSelectedData(null);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">{title}</DialogTitle>
          <DialogDescription className="mb-5 text-center">
            {willArchive
              ? "O'chirgandan so'ng arxivlar bo'limidan topishingiz mumkin"
              : "O'chirgandan so'ng orqaga qaytarish imkoni yo'q!!!"}
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
              deleteFunction();
            }}
            variant={"danger"}
          >
            O'chirish
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDeleteModal;
