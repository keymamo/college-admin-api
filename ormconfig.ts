import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { Classlist } from './src/entities/Classlist';
import { Prof } from './src/entities/Prof';
import { Stu } from './src/entities/Stu';

dotenv.config();

const config: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
        Classlist,
        Prof,
        Stu
    ],
    migrations: [__dirname + '/src/migrations/*.ts'],
    cli: { migrationsDir: 'src/migrations'},
    autoLoadEntities: true,
    charset: 'utf8mb4',
    synchronize: false,
    logging: process.env.NODE_ENV !== 'production',
    keepConnectionAlive: true
}

export = config;