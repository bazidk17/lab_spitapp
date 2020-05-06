import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HandleFilePage } from './handle-file.page';

describe('HandleFilePage', () => {
  let component: HandleFilePage;
  let fixture: ComponentFixture<HandleFilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleFilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HandleFilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
