import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatModalComponent } from './updat-modal.component';

describe('UpdatModalComponent', () => {
  let component: UpdatModalComponent;
  let fixture: ComponentFixture<UpdatModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
