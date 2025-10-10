import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegalNotice } from './legal-notice';
import { TranslateModule } from '@ngx-translate/core';

describe('LegalNotice', () => {
  let component: LegalNotice;
  let fixture: ComponentFixture<LegalNotice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalNotice, TranslateModule.forRoot()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalNotice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
