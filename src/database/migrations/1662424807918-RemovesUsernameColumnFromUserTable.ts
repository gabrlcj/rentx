import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class RemovesUsernameColumnFromUserTable1662424807918
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("User", "username");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "User",
      new TableColumn({
        name: "username",
        type: "varchar",
      })
    );
  }
}
