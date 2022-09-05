import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const createCategoriesController = new CreateCategoryController();
const importCategoriesController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", createCategoriesController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoriesController.handle
);

export { categoriesRoutes };
