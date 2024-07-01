import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse } from '../../../Models/Base-Models/IResponse';
import { API_END_POINTS } from '../../../Constants/ApiEndPoints';

@Injectable({
  providedIn: 'root'
})
export class GetAllBusStopsService {
  constructor(private http: HttpClient) { }

  Execute() {
    return this.http.get<IResponse>(API_END_POINTS.GetAllBusStops);
  }
}
