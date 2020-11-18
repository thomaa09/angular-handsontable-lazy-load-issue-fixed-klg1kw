import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExcelModule } from '../excel';
import { ManagerViewComponent } from './components/manager-view/manager-view.component';

const routes = [
  {
    path: 'view',
    component: ManagerViewComponent
  }
];

@NgModule({
  declarations: [
    ManagerViewComponent
  ],
  imports: [
    ExcelModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ManagerRoutingModule {
}
