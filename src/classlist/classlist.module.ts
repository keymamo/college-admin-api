import { Module } from '@nestjs/common';
import { ClasslistController } from './classlist.controller';
import { ClasslistService } from './classlist.service';

@Module({
  controllers: [ClasslistController],
  providers: [ClasslistService]
})
export class ClasslistModule {}
