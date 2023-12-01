import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallarycardComponent } from './gallarycard.component';

describe('GallarycardComponent', () => {
  let component: GallarycardComponent;
  let fixture: ComponentFixture<GallarycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GallarycardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GallarycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
