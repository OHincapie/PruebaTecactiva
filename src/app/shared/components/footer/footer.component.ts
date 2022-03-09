import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../../services/global.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public globalService:GlobalService) { }

  ngOnInit(): void {
    this.globalService.login=false;
  }

  logOut(){
    this.globalService.login=false;
  }

}
