import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFillComponent } from './data-fill.component';

describe('DataFillComponent', () => {
  let component: DataFillComponent;
  let fixture: ComponentFixture<DataFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataFillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
