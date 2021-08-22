import { Classlist } from '../../entities/Classlist';
import { Prof } from '../../entities/Prof';
import { Stu } from '../../entities/Stu';
import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';


export class CreateInitialData implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<void> {
        // throw new Error('Method not implemented.');

        await connection
            .createQueryBuilder()
            .insert()
            .into(Prof)
            .values([
                {pid:1, name: '구승모'},
                {pid:2, name: '박재성'},
            ])
            .execute();
        
        await connection
            .createQueryBuilder()
            .insert()
            .into(Classlist)
            .values([
                {cid: 1, pid: 1, name:'게임제작개론'},
                {cid: 2, pid: 2, name:'애자일방법론'}
            ])
            .execute();

        await connection
            .createQueryBuilder()
            .insert()
            .into(Stu)
            .values([
                {id: 1,name:'강한용', pid:1},
                {id: 2,name:'이뽀삐', pid:2},
                {id: 3,name:'박키티', pid:1},
                {id: 4,name:'김해피', pid:null}
            ])
            .execute();

        // sugang
        // cid, uid
        // INSERT INTO `sugang` VALUES (1,1),(2,1),(1,2),(2,3),(2,4);
        
        await connection    
            .createQueryBuilder()
            .relation(Classlist, 'stus')
            .of(2)
            .add(1);
        
        await connection    
            .createQueryBuilder()
            .relation(Classlist, 'stus')
            .of(1)
            .add(2);

        await connection    
            .createQueryBuilder()
            .relation(Classlist, 'stus')
            .of(2)
            .add(3);

        await connection    
            .createQueryBuilder()
            .relation(Classlist, 'stus')
            .of(2)
            .add(4);
    }

}