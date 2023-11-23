import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LibroI } from 'src/app/models/libros';
import { LibrosService } from 'src/app/services/libros.service';
@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent {
  public form:FormGroup = this.formBuilder.group({
    tituloLibro: ['', [Validators.required]],
    numero_paguinaLibro: ['', [Validators.required]],
    editorialLibro: ['', [Validators.required]],
    isbnLibro: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private libresService: LibrosService, private messageService: MessageService, private router:Router){}

  ngOnInit(): void {

  }

  onSubmit(): void{
    const formValue: LibroI = this.form.value;
    console.log(formValue);
    this.libresService.createLibro(formValue).subscribe(() =>{
      // console.log('Se ha creado correctamente');
      setTimeout(()=>{
        this.messageService.add({severity:'succes', summary:'Notificacion',detail:'libro Creado', life: 5000});
      }, 0);
      this.router.navigateByUrl('libro');
    },
    err => {
      console.log(err);
      console.log('No se ha creado correctamente');
    }
    );
  }

  cancel(){
    this.router.navigateByUrl('/libro');
  }

  get tituloLibro() { return this.form.get('tituloLibro'); }
  get numero_paguinaLibro() { return this.form.get('numero_paguinaLibro'); }
  get editorialLibro() { return this.form.get('editorialLibro'); }
  get isbnLibro() { return this.form.get('isbnLibro'); }
}
