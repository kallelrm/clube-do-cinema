import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class AlterMovieRentTable1609262774024 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'rent',
      new TableForeignKey({
        name: 'UserRent',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'rent',
      new TableForeignKey({
        name: 'MovieRent',
        columnNames: ['movie_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'movies',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('rent', 'MovieRent');

    await queryRunner.dropForeignKey('rent', 'UserRent');
  }
}
