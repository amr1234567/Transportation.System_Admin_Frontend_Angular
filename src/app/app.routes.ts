import { Routes } from '@angular/router';
import { DashBoardComponent } from '../app-module/admin-module/dash-board/dash-board.component';
import { NotFoundComponent } from '../app-module/not-found/not-found.component';
import { NavLayerComponent } from '../app-module/admin-module/nav-layer/nav-layer.component';
import { CreateManagerComponent } from '../app-module/admin-module/create-manager/create-manager.component';
import { LoginComponent } from '../app-module/login/login.component';
import { PremetionService } from '../Services/Helper-Services/Premetion/premetion.service';
import { EnrollBusStopToBusStopComponent } from '../app-module/admin-module/enroll-bus-stop-to-bus-stop/enroll-bus-stop-to-bus-stop.component';

export const routes: Routes = [
   {
      path: "main",
      component: NavLayerComponent,
      children: [
         {
            path: "dashboard",
            component: DashBoardComponent,
            title: "DashBoard",
         },
         {
            path: "createManager",
            component: CreateManagerComponent,
            title: "Create Manager",
         },
         {
            path: "enrollBusStop",
            component: EnrollBusStopToBusStopComponent,
            title: "Enroll Bus Stop To Another",
         },
         {
            path: '',
            redirectTo: "dashboard",
            pathMatch: "full"
         },
      ], canActivate: [
         PremetionService
      ],

   },
   {
      path: "login",
      component: LoginComponent
   },
   {
      path: '',
      redirectTo: "/main/dashboard",
      pathMatch: "full"
   },
   {
      path: "**",
      component: NotFoundComponent
   },
];
