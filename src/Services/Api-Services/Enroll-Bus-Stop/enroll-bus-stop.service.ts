import { Injectable } from '@angular/core';
import { IResponse } from '../../../Models/Base-Models/IResponse';
import { HttpClient } from '@angular/common/http';
import { API_END_POINTS } from '../../../Constants/ApiEndPoints';

@Injectable({
  providedIn: 'root'
})
export class EnrollBusStopService {

  constructor(private http: HttpClient) { }

  Execute(startBusStopId: string, DestinationId: string) {
    return this.http.post<IResponse>(API_END_POINTS.EnrollBusStop + `/${startBusStopId}/${DestinationId}`, null);
  }
}
