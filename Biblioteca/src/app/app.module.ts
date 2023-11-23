import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TableModule} from 'primeng/table'

import { ToastModule} from 'primeng/toast';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { CrearUsuarioComponent } from './components/usuario/crear-usuario/crear-usuario.component';
import { ActualizarUsuarioComponent } from './components/usuario/actualizar-usuario/actualizar-usuario.component';
import { EliminarUsuarioComponent } from './components/usuario/eliminar-usuario/eliminar-usuario.component';
import { MostrarUsuarioComponent } from './components/usuario/mostrar-usuario/mostrar-usuario.component';
import { EliminarPrestarComponent } from './components/prestar/eliminar-prestar/eliminar-prestar.component';
import { MostrarPrestarComponent } from './components/prestar/mostrar-prestar/mostrar-prestar.component';
import { ActualizarPrestarComponent } from './components/prestar/actualizar-prestar/actualizar-prestar.component';
import { CrearPrestarComponent } from './components/prestar/crear-prestar/crear-prestar.component';
import { CrearEjemplaresComponent } from './components/ejemplares/crear-ejemplares/crear-ejemplares.component';
import { MostrarEjemplaresComponent } from './components/ejemplares/mostrar-ejemplares/mostrar-ejemplares.component';
import { EliminarEjemplaresComponent } from './components/ejemplares/eliminar-ejemplares/eliminar-ejemplares.component';
import { ActualizarEjemplaresComponent } from './components/ejemplares/actualizar-ejemplares/actualizar-ejemplares.component';
import { MostrarLibrosComponent } from './components/libros/mostrar-libros/mostrar-libros.component';
import { CrearLibroComponent } from './components/libros/crear-libro/crear-libro.component';
import { ActualizarLibroComponent } from './components/libros/actualizar-libro/actualizar-libro.component';
import { EliminarLibroComponent } from './components/libros/eliminar-libro/eliminar-libro.component';
import { MostrarEscribirComponent } from './components/escribir/mostrar-escribir/mostrar-escribir.component';
import { CrearEscribirComponent } from './components/escribir/crear-escribir/crear-escribir.component';
import { ActualizarEscribirComponent } from './components/escribir/actualizar-escribir/actualizar-escribir.component';
import { EliminarEscribirComponent } from './components/escribir/eliminar-escribir/eliminar-escribir.component';
import { EliminarAutorComponent } from './components/autor/eliminar-autor/eliminar-autor.component';
import { MostrarAutorComponent } from './components/autor/mostrar-autor/mostrar-autor.component';
import { CrearAutorComponent } from './components/autor/crear-autor/crear-autor.component';
import { ActualizarAutorComponent } from './components/autor/actualizar-autor/actualizar-autor.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AsideComponent,
    CrearUsuarioComponent,
    ActualizarUsuarioComponent,
    EliminarUsuarioComponent,
    MostrarUsuarioComponent,
    EliminarPrestarComponent,
    MostrarPrestarComponent,
    ActualizarPrestarComponent,
    CrearPrestarComponent,
    CrearEjemplaresComponent,
    MostrarEjemplaresComponent,
    EliminarEjemplaresComponent,
    ActualizarEjemplaresComponent,
    MostrarLibrosComponent,
    CrearLibroComponent,
    ActualizarLibroComponent,
    EliminarLibroComponent,
    MostrarEscribirComponent,
    CrearEscribirComponent,
    ActualizarEscribirComponent,
    EliminarEscribirComponent,
    EliminarAutorComponent,
    MostrarAutorComponent,
    CrearAutorComponent,
    ActualizarAutorComponent,
  ],
  imports: [
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    BrowserModule,
    AppRoutingModule,
    PanelMenuModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
