import { Component, OnInit } from '@angular/core';
import { FILES_PATHS } from '../../Constants/FilesPaths';
import { LogInService } from '../../Services/Api-Services/LogInService/log-in.service';
import { LogInSuccessResponse } from '../../Models/Response-Models/LogInSuccessResponse';
import { ResponseWithErrors } from '../../Models/Response-Models/ResponseWithError';
import { LogInDetails } from '../../Models/Input-Models/LogInDetails';
import { TokenService } from "../../Services/Helper-Services/Token-Service/token.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {
  date: number = Math.floor(Date.now() / (100 * 60 * 60 * 24 * 10 * 356.25) + 1969);
  constructor(private logInService: LogInService, private router: Router, private TokenService: TokenService) { }
  isCLicked: boolean = false;
  ngOnInit(): void {
    if (this.TokenService.hasToken()) {
      this.router.navigate(["/main"]);
    }
  }
  Login() {
    this.isCLicked = true;
    this.logInService.Execute(this.LoginModel).subscribe((res: LogInSuccessResponse) => {
      if (res?.body?.token) {
        this.TokenService.addToken(res.body.token, res.body.tokenExpiration);
        this.router.navigate(["/main"]);
        this.isCLicked = false;
      }
    }, err => {
      if (err && err.statusCode !== 200) {
        const res: ResponseWithErrors = err.error;
        this.LoginErrors = res.message ?? "";
        this.LoginModel.password = "";
        this.isCLicked = false;
      }
    });
  }

  logoPath = FILES_PATHS.logoPath;
  emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  LoginErrors!: string;

  LoginModel: LogInDetails = {
    email: "",
    password: "",
  };

}
