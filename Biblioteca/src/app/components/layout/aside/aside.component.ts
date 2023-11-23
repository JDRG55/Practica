import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  items: MenuItem[]=[];
  ngOnInit(): void {
    this.items = [
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-users',
        routerLink: '/usuario',
  
  
      //   items: [
      //     {
      //       label: 'Mostrar Cliente'
            
      //     },
      //     {
      //       label: 'HTML 2'
      //     }
      //   ]
      },
      {
        label: 'Prestar',
        icon: 'pi pi-fw pi-qrcode',
        routerLink: '/Prestar'
      },
      {
        label: 'Ejemplares',
        icon: 'pi pi-fw pi-shopping-bag',
        routerLink: '/ejemplares'
      },
      {
        label: 'Libro',
        icon: 'pi pi-fw pi-book',
        routerLink: '/libro'
      },
      // {
      //   label: 'Escribir',
      //   icon: 'pi pi-fw pi-pencil',
      //   routerLink: '/escribir'
      // },
      { label: 'Autor',
      icon: 'pi pi-fw pi-user',
      routerLink: '/autor'
    }

    ];
  
    
  }
}
