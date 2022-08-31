import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

export class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  async handle(req: Request, res: Response) {
    const { file } = req;

    if (!file) return;

    await this.importCategoryUseCase.execute(file);

    return res.json({ file });
  }
}
