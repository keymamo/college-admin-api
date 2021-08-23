import { Test, TestingModule } from '@nestjs/testing';
import { ClasslistService } from './classlist.service';

describe('ClasslistService', () => {
  let service: ClasslistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClasslistService],
    }).compile();

    service = module.get<ClasslistService>(ClasslistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
