import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardControllerComponent } from './dashboard-controller.component';

describe('DashboardControllerComponent', () => {
  let component: DashboardControllerComponent;
  let fixture: ComponentFixture<DashboardControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardControllerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
