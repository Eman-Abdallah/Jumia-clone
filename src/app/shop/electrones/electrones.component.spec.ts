import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronesComponent } from './electrones.component';

describe('ElectronesComponent', () => {
  let component: ElectronesComponent;
  let fixture: ComponentFixture<ElectronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
