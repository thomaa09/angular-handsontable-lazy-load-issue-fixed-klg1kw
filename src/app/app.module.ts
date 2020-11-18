import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './components/app-root/app-root.component';

/* Routing Module */
import { AppRoutingModule } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
