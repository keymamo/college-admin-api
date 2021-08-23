import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ormConfig from '../ormconfig';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { StudentModule } from './student/student.module';
import { ClasslistModule } from './classlist/classlist.module';
import { ProfessorModule } from './professor/professor.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormConfig),
    StudentModule,
    ClasslistModule,
    ProfessorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // throw new Error('Method not implemented.');
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
