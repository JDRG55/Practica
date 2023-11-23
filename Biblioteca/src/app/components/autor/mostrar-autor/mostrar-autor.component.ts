import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AutorI } from 'src/app/models/autor';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-mostrar-autor',
  templateUrl: './mostrar-autor.component.html',
  styleUrls: ['./mostrar-autor.component.css']
})
export class MostrarAutorComponent implements OnInit{
  public autor : AutorI[] = [
  ]
  constructor( 
    private AutorService: AutorService,
    private router: Router,
    private mensaje: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarAutor()
  }

  mostrarAutor() {
    this.AutorService.getAllAutor()
      .subscribe({
        next: (data) => {
          this.autor = data.autores
          console.log(this.autor)  
        }
      })
  }

}
