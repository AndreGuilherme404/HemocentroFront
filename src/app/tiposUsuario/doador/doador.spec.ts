import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doador } from './doador';

describe('Doador', () => {
  let component: Doador;
  let fixture: ComponentFixture<Doador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Doador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
