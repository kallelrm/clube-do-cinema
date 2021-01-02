import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterTableRent1609594075779 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn('rent', 'devolution', new TableColumn({
      name: 'devolution',
      type: 'boolean',
      default: false,
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn('rent', 'devolution', new TableColumn({
      name: 'devolution',
      type: 'boolean',
    }));
  }
}
