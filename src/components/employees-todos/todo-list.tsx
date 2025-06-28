"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { CircleCheckBig, PlusCircle, Trash2 } from "lucide-react";
import UserTasksModal from "./user-tasks-modal";
import { useState } from "react";
import ConfirmDeleteModal from "../reuseable/confirm-delete-modal";
import { Separator } from "../ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import CompleteTaskModal from "./complete-task-modal";
import AddUserToTaskModal from "./add-user-totask-modal";

const initialTasks = [
  {
    id: 1,
    name: "Ko'chalarni tozalab bir dona ham axlat qoldirmasdan, maysalarni kaltalash",
    attechedUsers: [
      {
        id: 1,
        fullName: "Ingliz tili o'qituvchi",
      },
      {
        id: 2,
        fullName: "Matematika tili o'qituvchi",
      },
    ],
  },
  {
    id: 2,
    name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto iure magnam cum fugiat harum mollitia, accusamus adipisci, dicta vel aliquam atque perferendis optio cumque? Ea dicta illo facilis omnis non!",
    attechedUsers: [
      {
        id: 2,
        fullName: "Lorem teacher",
      },
    ],
  },
];

interface TodoListPropsTypes {
  type: string;
}

export default function TodoList({ type }: TodoListPropsTypes) {
  // states
  const [isUserTasksModalOpen, setUserTasksModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<any | null>(null);
  const [isConfirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState(false);
  const [isConfirmRemoveUserModalOpen, setConfirmRemoveUserModalOpen] =
    useState(false);
  const [isCompleteTaskModalOpen, setCompleteTaskModalOpen] = useState(false);
  const [isAttechUserToTaskModalOpen, setAttechUserToTaskModalOpen] =
    useState(false);

  // functions
  const handleDelete = () => {
    alert("deleting");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-10"
      >
        <div className="flex flex-col gap-5 items-start w-full">
          {initialTasks?.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-5 justify-between bg-background rounded-md  w-full ${
                type === "active" ? "border border-primary" : ""
              } `}
            >
              <div className="py-2 px-4 w-full border-r-2 border-primary flex items-center justify-between">
                <p className="max-w-[80%] text-primary font-semibold">
                  {item?.name}
                </p>
                <div className="flex items-end gap-2 flex-col">
                  {item?.attechedUsers?.map((item, index) => (
                    <div key={index}>
                      <div className="border rounded-md border-primary font-semibold flex items-center gap-2">
                        <span
                          onClick={() => {
                            setUserTasksModalOpen(true);
                            setSelectedTask(item);
                          }}
                          className={`text-primary cursor-pointer text-sm py-1 px-4 ${
                            type === "active" ? "border-r border-primary" : ""
                          } `}
                        >
                          {item?.fullName}
                        </span>
                        {type === "active" && (
                          <Button
                            onClick={() => {
                              setConfirmRemoveUserModalOpen(true);
                              setSelectedTask(item);
                            }}
                            variant={"icon"}
                            size={"sm"}
                          >
                            <Trash2 className="size-4 text-destructive" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mr-5 flex items-center justify-center">
                {/* add user */}
                {type === "active" && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        onClick={() => {
                          setAttechUserToTaskModalOpen(true);
                          setSelectedTask(item);
                        }}
                        variant={"icon"}
                        size={"sm"}
                      >
                        <PlusCircle className="text-primary size-7" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Xodimga biriktirish</TooltipContent>
                  </Tooltip>
                )}

                {/* delete task */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => {
                        setConfirmDeleteModalOpen(true);
                        setSelectedTask(item);
                      }}
                      variant={"icon"}
                      size={"sm"}
                    >
                      <Trash2 className="text-destructive size-6" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Topshiriqni o'chirish</TooltipContent>
                </Tooltip>

                {/* complete task */}
                {type === "active" && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        onClick={() => {
                          setCompleteTaskModalOpen(true);
                          setSelectedTask(item);
                        }}
                        variant={"icon"}
                        size={"sm"}
                      >
                        <CircleCheckBig className="text-primary size-6" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Topshiriqni yakunlash</TooltipContent>
                  </Tooltip>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* user tasks modal */}
      <UserTasksModal
        open={isUserTasksModalOpen}
        setOpen={setUserTasksModalOpen}
        data={selectedTask}
        setData={setSelectedTask}
      />

      {/* confirm remove user from task modal */}
      <ConfirmDeleteModal
        deleteFunction={handleDelete}
        open={isConfirmRemoveUserModalOpen}
        setOpen={setConfirmRemoveUserModalOpen}
        setSelectedData={selectedTask}
        title={`${selectedTask?.fullName}ni topshiriqdan chiqarmoqchimisiz?`}
        willArchive={false}
      />

      {/* confirm delete task modal */}
      <ConfirmDeleteModal
        deleteFunction={handleDelete}
        open={isConfirmDeleteModalOpen}
        setOpen={setConfirmDeleteModalOpen}
        setSelectedData={selectedTask}
        title={`Topshiriqni o'chirmoqchimisiz?`}
        willArchive={false}
      />

      {/* completa task */}
      <CompleteTaskModal
        open={isCompleteTaskModalOpen}
        setOpen={setCompleteTaskModalOpen}
        selectedData={selectedTask}
        setSelectedData={setSelectedTask}
      />

      {/* attech user to task */}
      <AddUserToTaskModal
        open={isAttechUserToTaskModalOpen}
        setOpen={setAttechUserToTaskModalOpen}
        selectedData={selectedTask}
        setSelectedData={setSelectedTask}
      />
    </>
  );
}
