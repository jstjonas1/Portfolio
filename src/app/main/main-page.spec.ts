import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainPage } from './main-page';
import { TranslateModule } from '@ngx-translate/core';

describe('MainPage', () => {
  let component: MainPage;
  let fixture: ComponentFixture<MainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPage, TranslateModule.forRoot()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
