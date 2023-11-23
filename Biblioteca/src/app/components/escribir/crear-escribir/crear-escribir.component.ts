import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { EscribirI } from 'src/app/models/escribir';
import { EscribirService } from 'src/app/services/escribir.service';
@Component({
  selector: 'app-crear-escribir',
  templateUrl: './crear-escribir.component.html',
  styleUrls: ['./crear-escribir.component.css']
})
export class CrearEscribirComponent {
  public form:FormGroup = this.formBuilder.group({
    dia_mes_yearEscribir: ['', [Validators.required]],
    libroId: ['', [Validators.required]],
    autorId: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private escribirService: EscribirService, private messageService: MessageService, private router:Router){}

  ngOnInit(): void {

  }

  onSubmit(): void{
    const formValue: EscribirI = this.form.value;
    console.log(formValue);
    this.escribirService.createEscribir(formValue).subscribe(() =>{
      // console.log('Se ha creado correctamente');
      setTimeout(()=>{
        this.messageService.add({severity:'succes', summary:'Notificacion',detail:'escribir Creado', life: 5000});
      }, 0);
      this.router.navigateByUrl('escribir');
    },
    err => {
      console.log(err);
      console.log('No se ha creado correctamente');
    }
    );
  }

  cancel(){
    this.router.navigateByUrl('/escribir');
  }

  get dia_mes_yearEscribir() { return this.form.get('dia_mes_yearEscribir'); }
  get libroId() { return this.form.get('libroId'); }
  get autorId() { return this.form.get('autorId'); }

}
