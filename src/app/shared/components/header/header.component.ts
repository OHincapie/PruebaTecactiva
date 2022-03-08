import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../../services/global.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public globalService:GlobalService) { }

  ngOnInit(): void {
    this.globalService.login=false;
  }

  logOut(){
    this.globalService.login=false;
  }

}
