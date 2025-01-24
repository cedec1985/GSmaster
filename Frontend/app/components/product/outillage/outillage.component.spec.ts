import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutillageComponent } from './outillage.component';

describe('OutillageComponent', () => {
  let component: OutillageComponent;
  let fixture: ComponentFixture<OutillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutillageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
