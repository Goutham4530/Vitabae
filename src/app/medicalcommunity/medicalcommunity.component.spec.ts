import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalcommunityComponent } from './medicalcommunity.component';

describe('MedicalcommunityComponent', () => {
  let component: MedicalcommunityComponent;
  let fixture: ComponentFixture<MedicalcommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalcommunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalcommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
