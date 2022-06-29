import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeMatiereComponent } from './list-type-matiere.component';

describe('ListTypeMatiereComponent', () => {
  let component: ListTypeMatiereComponent;
  let fixture: ComponentFixture<ListTypeMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypeMatiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
