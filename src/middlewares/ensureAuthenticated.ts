import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UserRepository } from "../modules/accounts/repositories/Users/UserRepository";

type PayloadSub = {
  sub: string;
};

export async function ensureAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new AppError("Token's missing", 401);

  const [, token] = authHeader.split(" ");

  try {
    const { sub: userId } = verify(
      token,
      "835b24aee8219397593168a834a53548"
    ) as PayloadSub;

    const userRepository = new UserRepository();

    const user = await userRepository.findById(userId);

    if (!user) throw new AppError("User does not exists!", 401);

    next();
  } catch (error) {
    throw new AppError("Invalid token!", 401);
  }
}
