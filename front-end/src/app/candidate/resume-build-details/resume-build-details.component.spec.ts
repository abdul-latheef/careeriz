import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBuildDetailsComponent } from './resume-build-details.component';

describe('ResumeBuildDetailsComponent', () => {
  let component: ResumeBuildDetailsComponent;
  let fixture: ComponentFixture<ResumeBuildDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeBuildDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeBuildDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
