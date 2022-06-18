import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
// Declarar el módulo de forma pública  
  declarations: [HeaderComponent],
  
  
  imports: [
    CommonModule, IonicModule
  ],
  exports:[
    //Exportar el componente
    HeaderComponent,
    ] 
})
export class ComponentesModule { }
