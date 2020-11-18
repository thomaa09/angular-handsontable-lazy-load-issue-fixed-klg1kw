import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'manager',
    loadChildren: './manager/manager.module#ManagerModule'
  },
  {
    path: 'employee',
    loadChildren: './employee/employee.module#EmployeeModule'
  },
  {
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  },
  {
    path: '',
    redirectTo: 'error/not-found',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'error/not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    FormsModule,
    RouterModule
  ]
})
export class AppRoutingModule {
}
