import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "rentalx",
  entities: [],
  migrations: [],
  synchronize: true,
  logging: false,
});
