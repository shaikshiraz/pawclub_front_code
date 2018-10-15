import { VenderRoutingModule } from './vender-routing.module';

describe('VenderRoutingModule', () => {
  let venderRoutingModule: VenderRoutingModule;

  beforeEach(() => {
    venderRoutingModule = new VenderRoutingModule();
  });

  it('should create an instance', () => {
    expect(venderRoutingModule).toBeTruthy();
  });
});
