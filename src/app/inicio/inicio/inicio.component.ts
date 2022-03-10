import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef , OnChanges} from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  apiLoaded = false;
  number=Array(6);
  w:number;
  h:number;
  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnChanges(){
    console.log("cambio")
  }
  
  ngOnInit(): void {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    if(screen.width<500){
      this.w=300;
      this.h=this.w*0.6
    }
    console.log()
  }

  

  suscrito(){
    Swal.fire('Te has suscrito!',
    'Bienvenido al mejor equipo!',
    'success')
  }

}
