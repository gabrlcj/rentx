import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export class CreateSpecificationController {
  handle(req: Request, res: Response) {
    const { name, description } = req.body;

    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase
    );

    const specification = createSpecificationUseCase.execute({
      name,
      description,
    });

    return res.status(201).json({ specification });
  }
}
