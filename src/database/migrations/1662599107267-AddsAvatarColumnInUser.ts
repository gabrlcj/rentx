import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddsAvatarColumnInUser1662599107267 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "User",
      new TableColumn({
        name: "avatar",
        type: "varchar",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("User", "avatar");
  }
}
