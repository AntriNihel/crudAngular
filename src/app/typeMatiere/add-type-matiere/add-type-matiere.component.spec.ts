import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeMatiereComponent } from './add-type-matiere.component';

describe('AddTypeMatiereComponent', () => {
  let component: AddTypeMatiereComponent;
  let fixture: ComponentFixture<AddTypeMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeMatiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
