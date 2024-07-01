import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdataComponent } from './postdata.component';

describe('PostdataComponent', () => {
  let component: PostdataComponent;
  let fixture: ComponentFixture<PostdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostdataComponent]
    });
    fixture = TestBed.createComponent(PostdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
