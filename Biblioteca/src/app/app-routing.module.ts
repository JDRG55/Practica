import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarUsuarioComponent } from './components/usuario/mostrar-usuario/mostrar-usuario.component';
import { MostrarPrestarComponent } from './components/prestar/mostrar-prestar/mostrar-prestar.component';
import { MostrarEjemplaresComponent } from './components/ejemplares/mostrar-ejemplares/mostrar-ejemplares.component';
import { MostrarLibrosComponent } from './components/libros/mostrar-libros/mostrar-libros.component';
import { MostrarEscribirComponent } from './components/escribir/mostrar-escribir/mostrar-escribir.component';
import { MostrarAutorComponent } from './components/autor/mostrar-autor/mostrar-autor.component';
import { CrearUsuarioComponent } from './components/usuario/crear-usuario/crear-usuario.component';
import { ActualizarUsuarioComponent } from './components/usuario/actualizar-usuario/actualizar-usuario.component';
import { EliminarUsuarioComponent } from './components/usuario/eliminar-usuario/eliminar-usuario.component';
import { CrearPrestarComponent } from './components/prestar/crear-prestar/crear-prestar.component';
import { ActualizarPrestarComponent } from './components/prestar/actualizar-prestar/actualizar-prestar.component';
import { EliminarPrestarComponent } from './components/prestar/eliminar-prestar/eliminar-prestar.component';
import { CrearEjemplaresComponent } from './components/ejemplares/crear-ejemplares/crear-ejemplares.component';
import { ActualizarEjemplaresComponent } from './components/ejemplares/actualizar-ejemplares/actualizar-ejemplares.component';
import { EliminarEjemplaresComponent } from './components/ejemplares/eliminar-ejemplares/eliminar-ejemplares.component';
import { CrearLibroComponent } from './components/libros/crear-libro/crear-libro.component';
import { ActualizarLibroComponent } from './components/libros/actualizar-libro/actualizar-libro.component';
import { EliminarLibroComponent } from './components/libros/eliminar-libro/eliminar-libro.component';
import { ActualizarEscribirComponent } from './components/escribir/actualizar-escribir/actualizar-escribir.component';
import { CrearEscribirComponent } from './components/escribir/crear-escribir/crear-escribir.component';
import { EliminarEscribirComponent } from './components/escribir/eliminar-escribir/eliminar-escribir.component';
import { CrearAutorComponent } from './components/autor/crear-autor/crear-autor.component';
import { ActualizarAutorComponent } from './components/autor/actualizar-autor/actualizar-autor.component';
import { EliminarAutorComponent } from './components/autor/eliminar-autor/eliminar-autor.component';
const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  {
    path: "usuario",
    component: MostrarUsuarioComponent
  },
  {
    path: "addusuario",
    component:CrearUsuarioComponent
  },
  {
    path: "actualizarUsuario",
    component: ActualizarUsuarioComponent
  },
   { path: "eliminarUsuario",
    component: EliminarUsuarioComponent
  },

  {
    path: "Prestar",
    component: MostrarPrestarComponent
  },
  {
    path: "crearPrestar",
    component: CrearPrestarComponent
  },
  {
    path: "actualizarPrestar",
    component:ActualizarPrestarComponent
  },
  {
    path: "eliminarPrestar",
    component: EliminarPrestarComponent
  },

  {
    path: "ejemplares",
    component: MostrarEjemplaresComponent
  },
  {
    path: "crearEjemplares",
    component: CrearEjemplaresComponent
  },
  {
    path: "actualizarEjemplares",
    component: ActualizarEjemplaresComponent
  },
  {
    path: "eliminarEjemplares",
    component: EliminarEjemplaresComponent
  },
{
  path: "libro",
  component: MostrarLibrosComponent
},
{
  path: "crearlibro",
  component: CrearLibroComponent
},
{
  path: "actualizarlibro",
  component: ActualizarLibroComponent
},
{
  path: "eliminarlibro",
  component: EliminarLibroComponent
},

{
  path: "escribir",
  component: MostrarEscribirComponent
},
{
  path: "crearEscribir",
  component: CrearEscribirComponent
},
{
  path: "actualizarEscribir",
  component: ActualizarEscribirComponent
},
{
  path: "eliminarEscribir",
  component: EliminarEscribirComponent
},

{
  path: "autor",
  component: MostrarAutorComponent
},
{
  path: "crearAutor",
  component: CrearAutorComponent
},
{
  path: "actualizarAutor",
  component: ActualizarAutorComponent
},
{
  path: "eliminarAutor",
  component: EliminarAutorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
