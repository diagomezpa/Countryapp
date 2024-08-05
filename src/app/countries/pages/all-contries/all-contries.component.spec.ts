import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllContriesComponent } from './all-contries.component';

describe('AllContriesComponent', () => {
  let component: AllContriesComponent;
  let fixture: ComponentFixture<AllContriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllContriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllContriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
