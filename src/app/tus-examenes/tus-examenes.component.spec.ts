import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusExamenesComponent } from './tus-examenes.component';

describe('TusExamenesComponent', () => {
  let component: TusExamenesComponent;
  let fixture: ComponentFixture<TusExamenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TusExamenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TusExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
