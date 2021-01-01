import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateClockInMemberFKs1609533477046
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'clock_in',
      new TableForeignKey({
        name: 'ClockInMember',
        columnNames: ['member_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'members',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'clock_in',
      new TableForeignKey({
        name: 'ClockInCreatedByMember',
        columnNames: ['created_by_member_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'members',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('clock_in', 'ClockInCreatedByMembers');
    await queryRunner.dropForeignKey('clock_in', 'ClockInMembers');
  }
}
