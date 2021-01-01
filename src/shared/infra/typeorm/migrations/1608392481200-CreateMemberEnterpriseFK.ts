import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateMemberEnterpriseFK1608392481200
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'members',
      new TableForeignKey({
        name: 'MemberEnterprise',
        columnNames: ['enterprise_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'enterprises',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('members', 'MemberEnterprise');
  }
}
