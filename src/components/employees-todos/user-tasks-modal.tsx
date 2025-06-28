import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

interface UserTasksModalPropsTypes {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

export default function UserTasksModal({
  data,
  open,
  setData,
  setOpen,
}: UserTasksModalPropsTypes) {
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
            <DialogTitle>
              <span className="text-xl font-bold text-primary">
                {data?.fullName}
              </span>
              ga berilgan barcha topshiriqlar
            </DialogTitle>
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
