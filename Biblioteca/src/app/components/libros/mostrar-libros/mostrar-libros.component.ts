import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LibroI } from 'src/app/models/libros';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-mostrar-libros',
  templateUrl: './mostrar-libros.component.html',
  styleUrls: ['./mostrar-libros.component.css']
})
export class MostrarLibrosComponent implements OnInit{

  public libros: LibroI[] = []

  constructor(
    private LibrosService: LibrosService,
    private router: Router,
    private mensaje: MessageService
  ) { }
  ngOnInit(): void {
    this.mostrarLibros()
  }
  mostrarLibros() {
    this.LibrosService.getAllLibros()
      .subscribe({
        next: (data) => {
          this.libros= data.libros
          console.log(this.libros)
         
        }})}

}
