import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public globalService:GlobalService, private router: Router,) { }

  ngOnInit(): void {
    this.globalService.login=false;
  }

  logOut(){
    this.globalService.login=false;
    this.router.navigateByUrl('/user/login');
  }

}
