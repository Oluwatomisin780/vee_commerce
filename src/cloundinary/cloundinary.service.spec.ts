import { Test, TestingModule } from '@nestjs/testing';
//import { CloudinaryService } from './cloundinary.service';
import { CloudinaryService } from './cloundinary.service';
describe('CloudinaryService', () => {
  let service: CloudinaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CloudinaryService],
    }).compile();

    service = module.get<CloudinaryService>(CloudinaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
