import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantesComponent } from './plantes.component';

describe('PlantesComponent', () => {
  let component: PlantesComponent;
  let fixture: ComponentFixture<PlantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
