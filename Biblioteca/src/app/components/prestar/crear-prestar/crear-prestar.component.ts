import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PrestarI } from 'src/app/models/prestar';
import { PrestarService } from 'src/app/services/prestar.service';
@Component({
  selector: 'app-crear-prestar',
  templateUrl: './crear-prestar.component.html',
  styleUrls: ['./crear-prestar.component.css']
})
export class CrearPrestarComponent {
  public form:FormGroup = this.formBuilder.group({
    fecha_devPrestar: ['', [Validators.required]],
    fecha_prestPrestar: ['', [Validators.required]],
    UsuarioId: ['', [Validators.required]],
    ejemplaresId: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private prestarService: PrestarService, private messageService: MessageService, private router:Router){}

  ngOnInit(): void {

  }

  onSubmit(): void{
    const formValue: PrestarI = this.form.value;
    console.log(formValue);
    this.prestarService.createPrestar(formValue).subscribe(() =>{
      // console.log('Se ha creado correctamente');
      setTimeout(()=>{
        this.messageService.add({severity:'succes', summary:'Notificacion',detail:'prestar Creado', life: 5000});
      }, 0);
      this.router.navigateByUrl('Prestar');
    },
    err => {
      console.log(err);
      console.log('No se ha creado correctamente');
    }
    );
  }

  cancel(){
    this.router.navigateByUrl('/prestar');
  }

  get fecha_devPrestar() { return this.form.get('fecha_devPrestar'); }
  get fecha_prestPrestar() { return this.form.get('fecha_prestPrestar'); }
  get UsuarioId() { return this.form.get('UsuarioId'); }
  get ejemplaresId() { return this.form.get('ejemplaresId'); }
}
