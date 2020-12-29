import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateMoviesTable1609247774909 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'movies',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false,
          isUnique: true,
        },
        {
          name: 'director',
          type: 'varchar',
          isNullable: false,
          isUnique: false,
        },
        {
          name: 'total_qnt',
          type: 'smallint',
          isNullable: false,
        },
        {
          name: 'available_qnt',
          type: 'smallint',
          isNullable: false,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movies');
  }
}
