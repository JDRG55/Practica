import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UsuarioI } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.component.html',
  styleUrls: ['./mostrar-usuario.component.css']
})
export class MostrarUsuarioComponent implements OnInit {
  
  public usuario:UsuarioI[] = [
  ]

  constructor(
    private UsuarioService: UsuarioService,
    private router: Router,
    private mensaje: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarUsuario()
  }
  mostrarUsuario() {
    this.UsuarioService.getAllUsuario()
      .subscribe({
        next: (data) => {
          this.usuario = data.usuarios
          console.log(this.usuario)
         
        }
      })
  }

}