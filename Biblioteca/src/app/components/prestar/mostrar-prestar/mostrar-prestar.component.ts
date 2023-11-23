import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PrestarI } from 'src/app/models/prestar';
import { PrestarService } from 'src/app/services/prestar.service';

@Component({
  selector: 'app-mostrar-prestar',
  templateUrl: './mostrar-prestar.component.html',
  styleUrls: ['./mostrar-prestar.component.css']
})

export class MostrarPrestarComponent implements OnInit {
  
  public prestar:PrestarI[] = []
  
  constructor(
    private PrestarService: PrestarService,
    private router: Router,
    private mensaje: MessageService
  ) { }


  ngOnInit(): void {
    this.mostrarPrestar()
  }
  mostrarPrestar() {
    this.PrestarService.getAllPrestar()
      .subscribe({
        next: (data) => {
          this.prestar = data.prestares
          console.log(this.prestar)
         
        }})}

}