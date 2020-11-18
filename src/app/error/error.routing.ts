import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';

const routes = [
  {
    path: 'not-found',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ErrorRoutingModule {
}
