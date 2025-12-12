import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logro } from './logro';

describe('Logro', () => {
  let component: Logro;
  let fixture: ComponentFixture<Logro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
