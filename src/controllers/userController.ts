import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();

  res.json({
    users: users,
  });
};

export const createUsers = async (req: Request, res: Response) => {
  const { username } = req.body;

  const user = await prisma.user.create({
    data: {
      username,
      money: 0,
      increment: 1,
      superIncrement: 0,
      unlockMoneyRain: false,
    },
  });

  res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const { username, money, increment, superIncrement, unlockMoneyRain } =
    req.body;

  const updatedUser = await prisma.user.update({
    where: {
      username,
    },
    data: {
      money,
      increment,
      superIncrement,
      unlockMoneyRain,
    },
  });

  res.json(updatedUser);
};

export const deleteUsers = async (req: Request, res: Response) => {
  const { id } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!user) {
    res.json({ message: "User not found" });
    return;
  }

  const deletedUser = await prisma.user.delete({
    where: {
      id: id,
    },
  });

  res.json(deletedUser);
};
