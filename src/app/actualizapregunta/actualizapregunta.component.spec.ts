import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizapreguntaComponent } from './actualizapregunta.component';

describe('ActualizapreguntaComponent', () => {
  let component: ActualizapreguntaComponent;
  let fixture: ComponentFixture<ActualizapreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizapreguntaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizapreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
