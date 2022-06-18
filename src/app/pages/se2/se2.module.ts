import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Se2PageRoutingModule } from './se2-routing.module';

import { Se2Page } from './se2.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Se2PageRoutingModule,
    ComponentesModule
  ],
  declarations: [Se2Page]
})
export class Se2PageModule {}
