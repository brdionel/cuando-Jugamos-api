import { Test, TestingModule } from '@nestjs/testing';
import { CampeonatoController } from './campeonato.controller';

describe('CampeonatoController', () => {
  let controller: CampeonatoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampeonatoController],
    }).compile();

    controller = module.get<CampeonatoController>(CampeonatoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
