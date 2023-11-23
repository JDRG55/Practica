import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AutorI } from 'src/app/models/autor';
import { AutorService } from 'src/app/services/autor.service';
@Component({
  selector: 'app-crear-autor',
  templateUrl: './crear-autor.component.html',
  styleUrls: ['./crear-autor.component.css']
})
export class CrearAutorComponent {
  public form:FormGroup = this.formBuilder.group({
    nombreAutor: ['', [Validators.required]],
  
  });

  constructor(private formBuilder: FormBuilder, private autorService: AutorService, private messageService: MessageService, private router:Router){}

  ngOnInit(): void {

  }

  onSubmit(): void{
    const formValue: AutorI = this.form.value;
    console.log(formValue);
    this.autorService.createAutor(formValue).subscribe(() =>{
      // console.log('Se ha creado correctamente');
      setTimeout(()=>{
        this.messageService.add({severity:'succes', summary:'Notificacion',detail:'autor Creado', life: 5000});
      }, 0);
      this.router.navigateByUrl('autor');
    },
    err => {
      console.log(err);
      console.log('No se ha creado correctamente');
    }
    );
  }

  cancel(){
    this.router.navigateByUrl('/autor');
  }

  get nombreAutor() { return this.form.get('nombreAutor'); }
 
}
