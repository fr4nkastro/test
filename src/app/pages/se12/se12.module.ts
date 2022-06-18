import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Se12PageRoutingModule } from './se12-routing.module';

import { Se12Page } from './se12.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Se12PageRoutingModule,
    ComponentesModule
  ],
  declarations: [Se12Page]
})
export class Se12PageModule {}
