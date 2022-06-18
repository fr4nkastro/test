import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Se1Page } from './se1.page';

const routes: Routes = [
  {
    path: '',
    component: Se1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Se1PageRoutingModule {}
