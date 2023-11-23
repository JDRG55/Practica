import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UsuarioI } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  public form:FormGroup = this.formBuilder.group({
    nombreUsuario: ['', [Validators.required]],
    apellidoUsuario: ['', [Validators.required]],
    direccionUsuario: ['', [Validators.required]],
    telefonoUsuario: ['', [Validators.required]],
    estadoUsuario: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private messageService: MessageService, private router:Router){}

  ngOnInit(): void {

  }

  onSubmit(): void{
    const formValue: UsuarioI = this.form.value;
    console.log(formValue);
    this.usuarioService.createUsuario(formValue).subscribe(() =>{
      // console.log('Se ha creado correctamente');
      setTimeout(()=>{
        this.messageService.add({severity:'succes', summary:'Notificacion',detail:'usuario Creado', life: 5000});
      }, 0);
      this.router.navigateByUrl('usuario');
    },
    err => {
      console.log(err);
      console.log('No se ha creado correctamente');
    }
    );}
    
  cancel(){
    this.router.navigateByUrl('/usuario');
  }

    get nombreUsuario() { return this.form.get('nombreUsuario'); }
    get apellidoUsuario() { return this.form.get('apellidoUsuario'); }
    get direccionUsuario() { return this.form.get('direccionUsuario'); }
    get telefonoUsuario() { return this.form.get('telefonoUsuario'); }
    get estadoUsuario() { return this.form.get('estadoUsuario'); }
}
