import { Component } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { Router } from '@angular/router';
  import { MessageService } from 'primeng/api';
  import { EjemplaresI } from 'src/app/models/ejemplares';
  import { EjemplaresService } from 'src/app/services/ejemplares.service';

@Component({
  selector: 'app-crear-ejemplares',
  templateUrl: './crear-ejemplares.component.html',
  styleUrls: ['./crear-ejemplares.component.css']
})
export class CrearEjemplaresComponent {
  public form:FormGroup = this.formBuilder.group({
    localizacionEjemplares: ['', [Validators.required]],
    libroId: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private ejemplaresService: EjemplaresService, private messageService: MessageService, private router:Router){}

  ngOnInit(): void {

  }

  onSubmit(): void{
    const formValue: EjemplaresI = this.form.value;
    console.log(formValue);
    this.ejemplaresService.createEjemplares(formValue).subscribe(() =>{
      // console.log('Se ha creado correctamente');
      setTimeout(()=>{
        this.messageService.add({severity:'succes', summary:'Notificacion',detail:'ejemplar Creado', life: 5000});
      }, 0);
      this.router.navigateByUrl('ejemplares');
    },
    err => {
      console.log(err);
      console.log('No se ha creado correctamente');
    }
    );
  }

  cancel(){
    this.router.navigateByUrl('/ejemplares');
  }

  get localizacionEjemplares() { return this.form.get('localizacionEjemplares'); }
  get libroId() { return this.form.get('libroId'); }
}
