import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { EscribirI } from 'src/app/models/escribir';
import { EscribirService } from 'src/app/services/escribir.service';

@Component({
  selector: 'app-mostrar-escribir',
  templateUrl: './mostrar-escribir.component.html',
  styleUrls: ['./mostrar-escribir.component.css']
})
export class MostrarEscribirComponent implements OnInit{

  public escribir: EscribirI[]= []

  constructor(
    private escribirService: EscribirService,
    private router: Router,
    private mensaje: MessageService
  ) { }
  ngOnInit(): void {
    this.mostrarEscribir()
  }

  mostrarEscribir(){
    this.escribirService.getAllEscribir()
     .subscribe({
       next: (data) => {
         this.escribir = data.Escribirs
         console.log(this.escribir)
       } 
     })

  }
}
