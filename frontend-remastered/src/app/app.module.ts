import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccordionModule } from 'primeng/accordion';
import {TabMenuModule} from 'primeng/tabmenu';
import { FrontLightComponent } from './front-light/front-light.component';
import { WorkLightComponent } from './work-light/work-light.component';
import { ShelfLightComponent } from './shelf-light/shelf-light.component';
import { CeilingLightComponent } from './ceiling-light/ceiling-light.component';
import { PowerPlugsComponent } from './power-plugs/power-plugs.component';

@NgModule({
  declarations: [AppComponent, FrontLightComponent, WorkLightComponent, ShelfLightComponent, CeilingLightComponent, PowerPlugsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    MatIconModule,
    TabMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
