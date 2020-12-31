import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterMoviesTable1609384106397 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('movies', 'available_qnt');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'movies',
      new TableColumn({
        name: 'available_qnt',
        type: 'smallint',
        isNullable: false,
      }),
    );
  }
}
