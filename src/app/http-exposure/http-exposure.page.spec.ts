import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HttpExposurePage } from './http-exposure.page';

describe('HttpExposurePage', () => {
  let component: HttpExposurePage;
  let fixture: ComponentFixture<HttpExposurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpExposurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HttpExposurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
