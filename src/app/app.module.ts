import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MtInputComponent } from './mt-input/mt-input.component';
import { MtCardComponent } from './mt-card/mt-card.component';
import { MtCheckboxComponent } from './mt-checkbox/mt-checkbox.component';
import { MtSwitchComponent } from './mt-switch/mt-switch.component';
import { MtRadioComponent } from './mt-radio/mt-radio.component';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    MtInputComponent,
    MtCardComponent,
    MtCheckboxComponent,
    MtSwitchComponent,
    MtRadioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
