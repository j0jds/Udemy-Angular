import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ObsComArrayComponent } from './components/obs-com-array/obs-com-array.component';
import { ObsComObjetoComponent } from './components/obs-com-objeto/obs-com-objeto.component';

@NgModule({
  declarations: [
    AppComponent,
    ObsComArrayComponent,
    ObsComObjetoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
