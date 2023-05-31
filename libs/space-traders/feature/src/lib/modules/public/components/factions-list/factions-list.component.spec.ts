import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FactionsListComponent } from './factions-list.component';

describe('FactionsListComponent', () => {
  let component: FactionsListComponent;
  let fixture: ComponentFixture<FactionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FactionsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FactionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
