import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperMaketComponent } from './super-maket.component';

describe('SuperMaketComponent', () => {
  let component: SuperMaketComponent;
  let fixture: ComponentFixture<SuperMaketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperMaketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperMaketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
