import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../../../Models/Base-Models/IResponse';
import { ManagerDetails } from '../../../Models/Input-Models/ManagerDetails';
import { API_END_POINTS } from '../../../Constants/ApiEndPoints';

@Injectable({
  providedIn: 'root'
})
export class CreateManagerService {

  constructor(private http: HttpClient) { }

  Execute(data: ManagerDetails): Observable<IResponse> {
    return this.http.post(API_END_POINTS.createManager, data);
  }
}
