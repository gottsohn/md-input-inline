import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
<<<<<<< db3e60a25a2698ef8e5729d396c757bc212b9a32
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MdInputInlineComponent } from './components/md-input-inline/md-input-inline.component';

@NgModule({
  declarations: [
    AppComponent,
    MdInputInlineComponent
=======

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
>>>>>>> chore: initial commit from angular-cli
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< db3e60a25a2698ef8e5729d396c757bc212b9a32
    HttpModule,
    MaterialModule.forRoot()
=======
    HttpModule
>>>>>>> chore: initial commit from angular-cli
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
