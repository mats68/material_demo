import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MtInputComponent } from './mt-input/mt-input.component';
import { MtCardComponent } from './mt-card/mt-card.component';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MtCheckboxComponent } from './mt-checkbox/mt-checkbox.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MtSwitchComponent } from './mt-switch/mt-switch.component';


@NgModule({
  declarations: [
    AppComponent,
    MtInputComponent,
    MtCardComponent,
    MtCheckboxComponent,
    MtSwitchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
