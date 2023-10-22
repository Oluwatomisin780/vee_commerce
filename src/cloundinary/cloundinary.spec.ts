import { Test, TestingModule } from '@nestjs/testing';
import { Cloundinary } from './cloundinary.provider';

describe('Cloundinary', () => {
  let provider: Cloundinary;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Cloundinary],
    }).compile();

    provider = module.get<Cloundinary>(Cloundinary);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
