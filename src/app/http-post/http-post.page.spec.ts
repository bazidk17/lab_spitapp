import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HttpPostPage } from './http-post.page';

describe('HttpPostPage', () => {
  let component: HttpPostPage;
  let fixture: ComponentFixture<HttpPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HttpPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
