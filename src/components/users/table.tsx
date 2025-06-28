"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, MoreVertical, Settings2, Trash2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Badge } from "../ui/badge";
import { Roles } from "@/constants/roles";
import { useState } from "react";
import { GotUserTypes } from "@/types/user.types";
import PermissionsViewModal from "./permissions-view-modal";
import { Button } from "../ui/button";
import OtherUserDatasModal from "./other-user-datas-modal";
import ConfirmDeleteModal from "../reuseable/confirm-delete-modal";

const initialData = [
  {
    id: 1,
    fullName: "Mardonov Muxsinjon Maxsudovich",
    phoneNumber: "930981409",
    roleName: "DEVELOPER",
    permissions: [
      "getUser",
      "createUser",
      "updateUser",
      "deleteUser",
      "getStudents",
      "createStudent",
      "updateStudent",
      "deleteStudent",
    ],
  },
];

export default function UsersTable() {
  // states
  const [isPermsModalOpen, setPermsModalOpen] = useState(false);
  const [isUserOtherDatasOpen, setUserOtherDatasOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<GotUserTypes | null>(null);
  const [isConfirmDeletModalOpen, setConfirmDeletModalOpen] = useState(false);

  // functions
  const handleDelete = () => {
    alert("deleting...");
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className="bg-background hover:bg-background">
            <TableHead className="w-[50px] text-center">N</TableHead>
            <TableHead className="text-center">F.I.SH</TableHead>
            <TableHead className="text-center">Tel. raqam</TableHead>
            <TableHead className="text-center">Rol</TableHead>
            <TableHead className="w-[150px]">
              <Settings2 className="mx-auto size-5" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {initialData?.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-center">
                {index + 1}
              </TableCell>
              <TableCell className="min-w-[70px] max-w-[100px] truncate">
                <Tooltip>
                  <TooltipTrigger className="font-semibold">
                    {item?.fullName}
                  </TooltipTrigger>
                  <TooltipContent>{item?.fullName}</TooltipContent>
                </Tooltip>
              </TableCell>
              <TableCell className="w-[150px] text-center font-semiboldr">
                <a href={`tel:+998${item?.phoneNumber}`}>
                  +998-{item?.phoneNumber}
                </a>
              </TableCell>
              <TableCell className="w-[200px] text-center">
                {Object.keys(Roles).includes(item?.roleName) ? (
                  <Badge
                    onClick={() => {
                      setSelectedUser(item);
                      setPermsModalOpen(true);
                    }}
                    className="border-primary"
                    variant={"secondary"}
                  >
                    {Roles[item?.roleName as keyof typeof Roles]}
                  </Badge>
                ) : (
                  <Badge variant={"destructive"}>Rol topilmadi</Badge>
                )}
              </TableCell>
              <TableCell className="w-[150px] flex items-center justify-center gap-1">
                <Button
                  onClick={() => {
                    setConfirmDeletModalOpen(true);
                    setSelectedUser(item);
                  }}
                  variant={"icon"}
                  size={"sm"}
                >
                  <Trash2 className="text-destructive size-5" />
                </Button>
                <Button disabled variant={"icon"} size={"sm"}>
                  <Edit className="text-primary size-5" />
                </Button>
                <Button
                  onClick={() => {
                    setUserOtherDatasOpen(true);
                    setSelectedUser(item);
                  }}
                  variant={"icon"}
                  size={"sm"}
                >
                  <MoreVertical className="text-primary size-5" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* perms modal */}
      <PermissionsViewModal
        open={isPermsModalOpen}
        setOpen={setPermsModalOpen}
        data={selectedUser}
        setData={setSelectedUser}
      />

      {/* user's all datas */}
      <OtherUserDatasModal
        open={isUserOtherDatasOpen}
        setOpen={setUserOtherDatasOpen}
        data={selectedUser}
        setData={setSelectedUser}
      />

      {/* confirm delete modal */}
      <ConfirmDeleteModal
        open={isConfirmDeletModalOpen}
        setOpen={setConfirmDeletModalOpen}
        deleteFunction={handleDelete}
        setSelectedData={setSelectedUser}
        title={
          <p>
            <span className="font-bold text-xl text-primary">
              {selectedUser?.fullName}
            </span>
            ni foydalanuvchilar ro'yxatidan o'chirish
          </p>
        }
        willArchive={true}
      />
    </>
  );
}
