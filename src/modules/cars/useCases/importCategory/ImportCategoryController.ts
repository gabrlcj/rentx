import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export class ImportCategoryController {
  async handle(req: Request, res: Response) {
    const { file } = req;

    if (!file) {
      return res.status(500).json({ error: "File not found!" });
    }

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    await importCategoryUseCase.execute(file);

    return res.json({ file });
  }
}
