"use server";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTask = async (formData) => {
  // formData is given by the <form> submitted, so the method .get is gonna get the "name" of the submitted data
  const content = formData.get("content");
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");
};
export const createTaskCustom = async (prevState, formData) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  const content = formData.get("content");
  const Task = z.object({
    content: z.string().trim().min(3),
  });
  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (error) {
    console.log(error);
    return {
      message: "error",
      text: error.issues ? error.issues[0]?.message : null,
    };
  }
};

export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("/tasks");
};

export const getTask = async (id) => {
  return prisma.task.findUnique({
    where: {
      id,
    },
  });
};

export const editTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === "on" ? true : false,
    },
  });
  redirect("/tasks");
};
