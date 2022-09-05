import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "rentx",
  synchronize: false,
  logging: false,
  entities: ["src/modules/cars/entities/**/*{.ts,.js}"],
  migrations: ["src/database/migrations/**/*{.ts,.js}"],
});
