import { Component } from '@angular/core';
import { ManagerDetails } from '../../../Models/Input-Models/ManagerDetails';
import { CreateManagerService } from '../../../Services/Api-Services/Create-Manager/create-manager.service';
import { CreateManagerSuccessResponse } from '../../../Models/Response-Models/CreateManagerSuccessResponse';
import { ResponseWithErrors } from '../../../Models/Response-Models/ResponseWithError';

@Component({
  selector: 'app-create-manager',
  templateUrl: './create-manager.component.html',
  styleUrl: './create-manager.component.scss'
})
export class CreateManagerComponent {
  showALert = true;
  AddAnotherAdminFun() {
    this.isCLicked = false;
    this.ManagerDetails.ConfirmPassword = "";
    this.ManagerDetails.Password = "";
    this.ManagerDetails.Email = "";
    this.ManagerDetails.Name = "";
    this.showALert = false;
    this.confirmCreate = false;
  }

  constructor(private managerService: CreateManagerService) { }
  isCLicked = false;

  emailRegex: RegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|".+?")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:.|\[\d{1,3}\]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  passwordRegex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  nameRegex: RegExp = /^[a-zA-Z]+$/;
  CreateErrors!: string;
  ManagerDetails: ManagerDetails = {
    ConfirmPassword: "",
    Password: "",
    Email: "",
    Name: "",
  }
  confirmCreate = false;
  CreateManager() {
    this.isCLicked = true
    this.managerService.Execute(this.ManagerDetails).subscribe((res: CreateManagerSuccessResponse) => {
      this.confirmCreate = true;
      setTimeout(() => {
        this.showALert = false;
      }, 3000);
    }, (err) => {
      const error: ResponseWithErrors = err.error;
      this.CreateErrors = error.message ?? "";
      this.isCLicked = false;
      this.ManagerDetails.ConfirmPassword = "";
      this.ManagerDetails.Password = "";
      setTimeout(() => {
        this.CreateErrors = "";
      }, 5000)
    })
  }
}
