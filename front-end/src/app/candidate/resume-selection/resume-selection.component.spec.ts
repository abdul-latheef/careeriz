import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSelectionComponent } from './resume-selection.component';

describe('ResumeSelectionComponent', () => {
  let component: ResumeSelectionComponent;
  let fixture: ComponentFixture<ResumeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
