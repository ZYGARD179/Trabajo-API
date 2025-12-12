import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reco } from './reco';

describe('Reco', () => {
  let component: Reco;
  let fixture: ComponentFixture<Reco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reco);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
