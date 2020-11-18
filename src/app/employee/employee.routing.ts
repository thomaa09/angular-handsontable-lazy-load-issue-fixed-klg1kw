import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExcelModule } from '../excel';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';

const routes = [
  {
    path: 'view',
    component: EmployeeViewComponent
  }
];

@NgModule({
  declarations: [
    EmployeeViewComponent
  ],
  imports: [
    ExcelModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class EmployeeRoutingModule {
}
