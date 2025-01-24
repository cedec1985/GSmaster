import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilierComponent } from './mobilier.component';

describe('MobilierComponent', () => {
  let component: MobilierComponent;
  let fixture: ComponentFixture<MobilierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
