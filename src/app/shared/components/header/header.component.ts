import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  id=1;
  constructor(public globalService:GlobalService, private router: Router,) { console.log('hola mundo')}

  ngOnInit(): void {
    this.globalService.login=false;
  }

  logOut(){
    this.globalService.login=false;
    this.router.navigateByUrl('/user/login');
  }
  cambio(){
    
    if(this.id==1){
      this.id=2
      console.log('1')
      return
      
    } 
    if(this.id==2){
      this.id=1
      console.log('2')
      return
    }
  }

  ocultar(){
    this.id=1
  }

}
