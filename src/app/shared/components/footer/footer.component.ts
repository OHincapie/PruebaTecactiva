import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public globalService:GlobalService, private router: Router) { }

  ngOnInit(): void {
    this.globalService.login=false;
  }

  logOut(){
    this.globalService.login=false;
    this.router.navigateByUrl('/user/login');
  }

}
