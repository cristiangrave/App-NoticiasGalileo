import { Test, TestingModule } from '@nestjs/testing';
import { NoticiaService } from './noticias.service';

describe('NoticiaService', () => {
  let service: NoticiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoticiaService],
    }).compile();

    service = module.get<NoticiaService>(NoticiaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
