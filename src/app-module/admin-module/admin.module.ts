import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NavLayerComponent } from './nav-layer/nav-layer.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CreateManagerComponent } from './create-manager/create-manager.component';
import { RouterOutlet } from '@angular/router';
// import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { PiComponent } from './dash-board/pi/pi.component';
import { CreateManagerService } from '../../Services/Api-Services/Create-Manager/create-manager.service';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EnrollBusStopToBusStopComponent } from './enroll-bus-stop-to-bus-stop/enroll-bus-stop-to-bus-stop.component';
import { GetRelatedBusStopsService } from '../../Services/Api-Services/Get-Related-Bus-Stops/get-related-bus-stops.service';
import { GetAllBusStopsService } from '../../Services/Api-Services/Get-All-Bus-Stops/get-all-bus-stops.service';
import { EnrollBusStopService } from '../../Services/Api-Services/Enroll-Bus-Stop/enroll-bus-stop.service';



@NgModule({
  declarations: [
    NavLayerComponent,
    DashBoardComponent,
    CreateManagerComponent,
    // PiComponent
    EnrollBusStopToBusStopComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    FormsModule,
    MatProgressSpinnerModule
    // PowerBIEmbedModule
  ],
  providers: [
    CreateManagerService,
    GetRelatedBusStopsService,
    EnrollBusStopService,
    GetAllBusStopsService
  ],
  exports: [
    NavLayerComponent,
    DashBoardComponent,
    CreateManagerComponent,
    // PiComponent
    EnrollBusStopToBusStopComponent

  ]
})
export class AdminModule { }
