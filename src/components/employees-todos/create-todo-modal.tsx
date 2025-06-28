import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function CreateTodoModal() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>+ Topshiriq qo'shish</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Yangi topshiriq qo'shish</DialogTitle>
          </DialogHeader>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus iure reiciendis officiis assumenda est ab quod, placeat
            esse pariatur voluptatem tenetur repellat illum hic nesciunt id ipsa
            eaque accusamus aliquam.
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
