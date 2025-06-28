"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Eye, MoreVertical, Settings2, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { Roles } from "@/constants/roles";
import { Badge } from "../ui/badge";
import ConfirmDeleteModal from "../reuseable/confirm-delete-modal";
import ViewRolePermsModal from "./view-roles-perms-modal";

const initialData = [
  {
    id: 1,
    roleName: "DEVELOPER",
    permissions: [
      "getUsers",
      "createUsers",
      "deleteUsers",
      "updateUsers",
      "getRoles",
      "createRoles",
      "deleteRoles",
      "updateRoles",
    ],
  },
];

export default function RolesTable() {
  // states
  const [isPermsModalOpen, setPermsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<any | null>(null);
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
            <TableHead className="text-center">Nomi</TableHead>
            <TableHead className="w-[200px]">
              <Settings2 className="mx-auto size-5" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {initialData?.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-center w-[50px]">
                {index + 1}
              </TableCell>
              <TableCell className="text-primary font-bold text-center">
                {Object.keys(Roles).includes(item?.roleName) ? (
                  Roles[item?.roleName as keyof typeof Roles]
                ) : (
                  <Badge variant={"destructive"}>Rol topilmadi</Badge>
                )}
              </TableCell>
              <TableCell className="w-[200px] flex items-center justify-center gap-2">
                <Button
                  onClick={() => {
                    setPermsModalOpen(true);
                    setSelectedRole(item);
                  }}
                  variant={"icon"}
                  size={"sm"}
                >
                  <Eye className=" size-5" />
                </Button>
                <Button
                  onClick={() => {
                    setConfirmDeletModalOpen(true);
                    setSelectedRole(item);
                  }}
                  variant={"icon"}
                  size={"sm"}
                >
                  <Trash2 className="text-destructive size-5" />
                </Button>
                <Button disabled variant={"icon"} size={"sm"}>
                  <Edit className="text-primary size-5" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* confirm delete modal */}
      <ConfirmDeleteModal
        open={isConfirmDeletModalOpen}
        setOpen={setConfirmDeletModalOpen}
        deleteFunction={handleDelete}
        setSelectedData={setSelectedRole}
        title={
          <p>
            <span className="font-bold text-xl text-primary">
              {selectedRole?.roleName}
            </span>
            ni o'chirish. (Foydalanuvchuga biriktirilmaganini tekshiring)
          </p>
        }
        willArchive={false}
      />

      {/* role perms modal */}
      <ViewRolePermsModal
        open={isPermsModalOpen}
        setOpen={setPermsModalOpen}
        data={selectedRole}
        setData={setSelectedRole}
      />
    </>
  );
}
