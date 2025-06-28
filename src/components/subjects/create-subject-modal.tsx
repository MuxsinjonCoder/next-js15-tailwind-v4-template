"use client";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Loader } from "../ui/loader";

export default function CreateSubjectModal() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>+ Fan qo'shish</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Yangi fan qo'shish</DialogTitle>
          </DialogHeader>
          <div className="my-5">
            <Loader />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
