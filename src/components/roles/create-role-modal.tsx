"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "../ui/checkbox";

const initialPermissions = [
  {
    id: 1,
    permName: "Foydalanuvchilar ro'yxati",
    actions: ["READ", "CREATE", "UPDATE", "DELETE"],
  },
  {
    id: 2,
    permName: "Rollar ro'yxati",
    actions: ["READ", "CREATE", "UPDATE", "DELETE"],
  },
];

type SelectedPerm = { name: string; actions: string[] };

const formSchema = z.object({
  roleName: z
    .string()
    .min(3, { message: "Rol nomi kamida 3ta bo'lshi kerak" })
    .max(50, { message: "Rol nomi 50 tadan ko'p bo'lmasligi kerak!!!" }),
});

export default function CreateRoleModal() {
  const [selectedPerms, setSelectedPerms] = useState<SelectedPerm[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roleName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("values", values);
    console.log("selectedPerms:", selectedPerms);
  }

  const handleSelectAllPermissions = () => {
    if (
      selectedPerms.length === initialPermissions.length &&
      initialPermissions.every(
        (perm) =>
          selectedPerms.find((p) => p.name === perm.permName)?.actions
            .length === perm.actions.length
      )
    ) {
      setSelectedPerms([]);
    } else {
      setSelectedPerms(
        initialPermissions.map((perm) => ({
          name: perm.permName,
          actions: perm.actions,
        }))
      );
    }
  };

  const handleSelectAllActions = (permName: string, actions: string[]) => {
    const existingPerm = selectedPerms.find((p) => p.name === permName);
    if (existingPerm?.actions.length === actions.length) {
      setSelectedPerms((prev) => prev.filter((p) => p.name !== permName));
    } else {
      setSelectedPerms((prev) => {
        const otherPerms = prev.filter((p) => p.name !== permName);
        return [...otherPerms, { name: permName, actions }];
      });
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>+ Rol qo'shish</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Yangi rol qo'shish</DialogTitle>
          </DialogHeader>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="roleName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rol nomi</FormLabel>
                      <FormControl>
                        <Input placeholder="Super admin" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-end mb-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSelectAllPermissions}
                  >
                    {selectedPerms.length === initialPermissions.length &&
                    initialPermissions.every(
                      (perm) =>
                        selectedPerms.find((p) => p.name === perm.permName)
                          ?.actions.length === perm.actions.length
                    )
                      ? "Barchasini o'chirish"
                      : "Barchasini tanlash"}
                  </Button>
                </div>

                <div className="flex items-start gap-5 flex-col">
                  {initialPermissions?.map((perm, index) => (
                    <div
                      className="flex flex-col gap-2 items-start w-full border py-2 px-4 rounded-md"
                      key={index}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <Checkbox
                            checked={selectedPerms.some(
                              (item) => item.name === perm.permName
                            )}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedPerms((prev) => [
                                  ...prev,
                                  { name: perm.permName, actions: ["READ"] },
                                ]);
                              } else {
                                setSelectedPerms((prev) =>
                                  prev.filter(
                                    (item) => item.name !== perm.permName
                                  )
                                );
                              }
                            }}
                            className="size-5 cursor-pointer border border-primary"
                          />
                          <span className="font-semibold">
                            {perm?.permName}
                          </span>
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleSelectAllActions(perm.permName, perm.actions)
                          }
                        >
                          {selectedPerms.find((p) => p.name === perm.permName)
                            ?.actions.length === perm.actions.length
                            ? "Barchasini o'chirish"
                            : "Barchasini tanlash"}
                        </Button>
                      </div>
                      {perm?.actions?.map((permActions, index) => (
                        <div
                          key={index}
                          className="ml-10 flex items-center gap-2 justify-start"
                        >
                          <Checkbox
                            checked={selectedPerms.some(
                              (permItem) =>
                                permItem.name === perm.permName &&
                                permItem.actions.includes(permActions)
                            )}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedPerms((prev) => {
                                  const existing = prev.find(
                                    (item) => item.name === perm.permName
                                  );
                                  if (existing) {
                                    return prev.map((item) =>
                                      item.name === perm.permName
                                        ? {
                                            ...item,
                                            actions: [
                                              ...new Set([
                                                ...item.actions,
                                                permActions,
                                              ]),
                                            ],
                                          }
                                        : item
                                    );
                                  } else {
                                    return [
                                      ...prev,
                                      {
                                        name: perm.permName,
                                        actions: [permActions],
                                      },
                                    ];
                                  }
                                });
                              } else {
                                setSelectedPerms((prev) =>
                                  prev
                                    .map((item) =>
                                      item.name === perm.permName
                                        ? {
                                            ...item,
                                            actions: item.actions.filter(
                                              (a) => a !== permActions
                                            ),
                                          }
                                        : item
                                    )
                                    .filter((item) => item.actions.length > 0)
                                );
                              }
                            }}
                            className="size-5 cursor-pointer border border-primary"
                          />
                          <span>{permActions}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <Button type="submit">Saqlash</Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
