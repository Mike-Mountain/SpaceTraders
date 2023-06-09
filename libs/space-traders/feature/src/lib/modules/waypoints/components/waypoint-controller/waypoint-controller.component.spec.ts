import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaypointControllerComponent } from './waypoint-controller.component';

describe('WaypointControllerComponent', () => {
  let component: WaypointControllerComponent;
  let fixture: ComponentFixture<WaypointControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaypointControllerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaypointControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
