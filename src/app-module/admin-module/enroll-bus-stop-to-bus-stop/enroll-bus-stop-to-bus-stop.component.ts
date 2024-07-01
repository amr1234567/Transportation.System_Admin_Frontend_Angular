import { Component, OnInit } from '@angular/core';
import { GetAllBusStopsService } from '../../../Services/Api-Services/Get-All-Bus-Stops/get-all-bus-stops.service';
import { BusStop } from '../../../Models/Response-Models/BusStop';
import { GetBusStops } from '../../../Models/Response-Models/GetBusStopsModel';
import { GetRelatedBusStopsService } from '../../../Services/Api-Services/Get-Related-Bus-Stops/get-related-bus-stops.service';
import { EnrollBusStopService } from '../../../Services/Api-Services/Enroll-Bus-Stop/enroll-bus-stop.service';
import { IGenericResponse } from '../../../Models/Base-Models/IGenericResponse';
import { ResponseWithErrors } from '../../../Models/Response-Models/ResponseWithError';

@Component({
  selector: 'app-enroll-bus-stop-to-bus-stop',
  templateUrl: './enroll-bus-stop-to-bus-stop.component.html',
  styleUrl: './enroll-bus-stop-to-bus-stop.component.scss'
})
export class EnrollBusStopToBusStopComponent implements OnInit {

  constructor(private getAllBusStopsSErvices: GetAllBusStopsService,
    private GetRelatedBusStopsService: GetRelatedBusStopsService,
    private EnrollService: EnrollBusStopService) { }

  busStops: BusStop[] | undefined = [];
  notRelatedBusStops: BusStop[] | undefined = [];
  startBusStopChecked = false;
  destinationBusStopChecked = false;
  selectedStartBusStop: string = "";
  selectedDestination: string = "";
  EnrollSuccess = false;
  MessageOfCallApi = "";
  ngOnInit(): void {
    this.getAllBusStopsSErvices.Execute().subscribe(
      (busStops: GetBusStops) => {
        this.busStops = busStops.body;
      }
    )
  }
  DestStopSelected(selectElement: HTMLSelectElement) {
    this.destinationBusStopChecked = selectElement.value != "";
    this.selectedDestination = selectElement.value;
  }
  startBusStopSelected(selectElement: HTMLSelectElement) {
    this.selectedStartBusStop = selectElement.value;
    this.startBusStopChecked = selectElement.value != ""
    this.notRelatedBusStops = [];
    if (selectElement.value != "") {
      this.GetRelatedBusStopsService.Execute(selectElement.value).subscribe(
        (relatedBusStops: GetBusStops) => {
          this.notRelatedBusStops = this.busStops?.filter(obj => !relatedBusStops.body?.some(excludeObj => excludeObj.id === obj.id)).filter(obj => obj.id != selectElement.value);
        }
      )
    }

  }
  Enroll() {
    if (this.destinationBusStopChecked && this.startBusStopChecked) {
      this.EnrollService.Execute(this.selectedStartBusStop, this.selectedDestination).subscribe(
        (res: IGenericResponse<boolean>) => {
          this.notRelatedBusStops = this.notRelatedBusStops?.filter(obj => obj.id != this.selectedDestination);
          this.EnrollSuccess = true;
          this.MessageOfCallApi = res.message ?? "";
        }, (res: ResponseWithErrors) => {
          this.EnrollSuccess = false;
          this.MessageOfCallApi = res.message ?? "";
        }
      )
    }
  }

}
