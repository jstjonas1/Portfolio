import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Refs } from './refs';

describe('Refs', () => {
  let component: Refs;
  let fixture: ComponentFixture<Refs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Refs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Refs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
