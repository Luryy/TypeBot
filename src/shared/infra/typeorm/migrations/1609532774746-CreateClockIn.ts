import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateClockIn1609532774746 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clock_in',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'member_id',
            type: 'uuid',
          },
          {
            name: 'created_by_member_id',
            type: 'uuid',
          },
          {
            name: 'in',
            type: 'timestamp',
          },
          {
            name: 'out',
            type: 'timestamp',
          },
          {
            name: 'telegram_chat_id',
            type: 'varchar',
          },
          {
            name: 'enterprise_id',
            type: 'uuid',
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
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clock_in');
  }
}
