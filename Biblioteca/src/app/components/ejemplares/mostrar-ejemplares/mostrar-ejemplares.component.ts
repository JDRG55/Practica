import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { EjemplaresI } from 'src/app/models/ejemplares';
import { EjemplaresService } from 'src/app/services/ejemplares.service';


@Component({
  selector: 'app-mostrar-ejemplares',
  templateUrl: './mostrar-ejemplares.component.html',
  styleUrls: ['./mostrar-ejemplares.component.css']
})
export class MostrarEjemplaresComponent implements OnInit{

  public ejemplares:EjemplaresI[]=[]

  constructor(
    private EjemplaresService: EjemplaresService,
    private router: Router,
    private mensaje: MessageService
  ) { }
  ngOnInit(): void {
    this.mostrarEjemplares()
  }
  mostrarEjemplares() {
    this.EjemplaresService.getAllEjemplares()
      .subscribe({
        next: (data) => {
          this.ejemplares= data.ejemplares
          console.log(this.ejemplares)
         
        }})}

}
