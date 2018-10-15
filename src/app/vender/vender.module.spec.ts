import { VenderModule } from './vender.module';

describe('VenderModule', () => {
  let venderModule: VenderModule;

  beforeEach(() => {
    venderModule = new VenderModule();
  });

  it('should create an instance', () => {
    expect(venderModule).toBeTruthy();
  });
});
