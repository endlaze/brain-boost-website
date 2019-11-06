import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ResetService } from '../../services/reset-service/reset.service'

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.less']
})

export class ResetComponent implements OnInit {
  queryParams: Params;
  password1 : string;
  password2 : string;
  hasLetter : boolean;
  hasCapital : boolean;
  hasNumber : boolean;
  hasLength : boolean;
  isMatch : boolean;
  isEnable : boolean;
  isVisible : boolean;
  isVisibleAll : boolean;

  constructor(private activatedRoute: ActivatedRoute, private resetService: ResetService, private router: Router) {
    this.getRouteParams();
  }
  
  ngOnInit() {
    this.password1 = "";
    this.password2 = "";
    this.hasLetter = false;
    this.hasCapital = false;
    this.hasNumber = false;
    this.hasLength = false;
    this.isMatch = false;
    this.isEnable = false;
    this.isVisible = false;
    this.isVisibleAll = false;
  }

  getRouteParams() {
    this.activatedRoute.queryParams.subscribe( params => {
        this.queryParams = params;
    });
  }

  OnClick(){
    const data = {'id': this.queryParams['user'],'password': this.password1,'verification_code': this.queryParams['code']};
    this.resetService.ResetPassword(data).subscribe(res => {
      console.log(res.status)
      console.log(res.body)
    });
    this.router.navigate(['home']);
  }

  CheckAll(){
    if (this.password1.match(/[a-z]/g))
      this.hasLetter = true;
    else
      this.hasLetter = false;
    if (this.password1.match(/[A-Z]/g))
      this.hasCapital = true;
    else
      this.hasCapital = false;
    if (this.password1.match(/[0-9]/g))
      this.hasNumber = true;
    else
      this.hasNumber = false;
    if (this.password1.length > 7)
      this.hasLength = true;
    else
      this.hasLength = false;
    if (this.password1 == this.password2)
      this.isMatch = true;
    else
      this.isMatch = false;
    this.CheckIsFine();
  };
  CheckMatch(){
    if (this.password2 != "")
      this.isVisible = true;
    else
      this.isVisible = false;
    if (this.password1 == this.password2)
      this.isMatch = true;
    else
      this.isMatch = false;
    this.CheckIsFine();
  }

  Focus(){
    this.isVisibleAll = true;
  }
  Blur(){
    if (this.password1 == "")
      this.isVisibleAll = false;
  }

  CheckIsFine(){
    if(this.hasLetter && this.hasCapital && this.hasNumber
      && this.hasLength && this.isMatch)
      this.isEnable = true;
    else
      this.isEnable = false;
  }
}
