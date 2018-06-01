import { LocalMaterialModule } from './local-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';

const routes: Routes = [
  {
    path: 'page1',
    component: Page1Component
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LocalMaterialModule // Remove this module for compodoc to output routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
