import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HttpGetPage } from './http-get.page';

describe('HttpGetPage', () => {
  let component: HttpGetPage;
  let fixture: ComponentFixture<HttpGetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpGetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HttpGetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
