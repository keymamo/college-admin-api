import { Test, TestingModule } from '@nestjs/testing';
import { ClasslistController } from './classlist.controller';

describe('ClasslistController', () => {
  let controller: ClasslistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClasslistController],
    }).compile();

    controller = module.get<ClasslistController>(ClasslistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
