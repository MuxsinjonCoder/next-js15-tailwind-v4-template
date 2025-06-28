"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Loader } from "../ui/loader";

const AddUserModal = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>+ Foydalanuvchi qo'shish</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Yangi foydalanuvchi qo'shish</DialogTitle>
          </DialogHeader>
          <Loader />
          <p className="text-center">Tayyorlanmoqda...</p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddUserModal;
