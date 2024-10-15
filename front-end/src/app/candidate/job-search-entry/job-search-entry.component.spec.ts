import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSearchEntryComponent } from './job-search-entry.component';

describe('JobSearchEntryComponent', () => {
  let component: JobSearchEntryComponent;
  let fixture: ComponentFixture<JobSearchEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSearchEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSearchEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
