import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollBusStopToBusStopComponent } from './enroll-bus-stop-to-bus-stop.component';

describe('EnrollBusStopToBusStopComponent', () => {
  let component: EnrollBusStopToBusStopComponent;
  let fixture: ComponentFixture<EnrollBusStopToBusStopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollBusStopToBusStopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnrollBusStopToBusStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
