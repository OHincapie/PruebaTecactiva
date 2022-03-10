import { Component, OnInit, ViewChild } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {



  displayedColumns: string[] = ['name', 'username', 'email', 'phone', 'web'];
  //data que se recibira
  data: any[] = [];
  //Data de la tabla
  dataSource = new MatTableDataSource<any>(this.data);
  //Paginador de la tabla
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;



  single: any[]=[
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
      {
      "name": "UK",
      "value": 6200000
    }
  ];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  colorScheme = {
    domain: ['#E74C3C', '#3498DB', '#9B59B6', '#1ABC9C'],group: ScaleType.Ordinal, selectable: true, name: 'Customer Usage', };
  constructor(private http:HttpClient ) { 
    const aux= this.single
    Object.assign(this, {aux});
    http.get("https://jsonplaceholder.typicode.com/users").subscribe((res)=>{
      let userData;
      const aux1:any=res;
      console.log(aux1)
      for(let a of aux1){
        userData={
          name: a.name,
          username: a.username,
          email: a.email,
          phone: a.phone,
          web: a.website
        }
        this.data.push(userData);
        this.dataSource = new MatTableDataSource<any>(this.data);
        this.dataSource.paginator = this.paginator;
      }

      
    })

  }

  ngOnInit(): void {
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
