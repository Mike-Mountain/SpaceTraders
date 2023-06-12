import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShipyardSummaryComponent } from './shipyard-summary.component';

describe('ShipyardSummaryComponent', () => {
  let component: ShipyardSummaryComponent;
  let fixture: ComponentFixture<ShipyardSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipyardSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShipyardSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
