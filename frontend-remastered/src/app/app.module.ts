import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FrontLightComponent } from './apps/front-light/front-light.component';
import { WorkLightComponent } from './apps/work-light/work-light.component';
import { ShelfLightComponent } from './apps/shelf-light/shelf-light.component';
import { CeilingLightComponent } from './apps/ceiling-light/ceiling-light.component';
import { PowerPlugsComponent } from './apps/power-plugs/power-plugs.component';
import { WorkLightService } from './apps/work-light/work-light.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SliderModule } from 'primeng/slider';
import { ColorPickerComponent } from './shared-apps/color-picker/color-picker.component';
import { ShelfLightService } from './apps/shelf-light/shelf-light.service';
import { PowerPlugService } from './apps/power-plugs/power-plug.service';
import { FrontLightService } from './apps/front-light/front-light.service';
import { SimplePatternFrontComponent } from './apps/front-light/simple-pattern-front/simple-pattern-front.component';
import { StaticColorComponent } from './apps/front-light/static-color/static-color.component';
import { SplitColorComponent } from './apps/front-light/split-color/split-color.component';
import { CeilingLightService } from './apps/ceiling-light/ceiling-light.service';
import { FormsModule } from '@angular/forms';
import { SimplePatternCeilingComponent } from './apps/ceiling-light/simple-pattern-ceiling/simple-pattern-ceiling.component';
import { WhiteCeilingComponent } from './apps/ceiling-light/white-ceiling/white-ceiling.component';
import { ColorCeilingComponent } from './apps/ceiling-light/color-ceiling/color-ceiling.component';
import { ColorPickerWhiteComponent } from './shared-apps/color-picker-white/color-picker-white.component';
import { GeneralSettingsComponent } from './apps/general-settings/general-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontLightComponent,
    WorkLightComponent,
    ShelfLightComponent,
    CeilingLightComponent,
    PowerPlugsComponent,
    ColorPickerComponent,
    SimplePatternFrontComponent,
    StaticColorComponent,
    SplitColorComponent,
    SimplePatternCeilingComponent,
    WhiteCeilingComponent,
    ColorCeilingComponent,
    ColorPickerWhiteComponent,
    GeneralSettingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    MatIconModule,
    TabViewModule,
    HttpClientModule,
    ToastModule,
    CheckboxModule,
    ButtonModule,
    FormsModule,
    SliderModule,
  ],
  providers: [
    WorkLightService,
    ShelfLightService,
    PowerPlugService,
    MessageService,
    FrontLightService,
    CeilingLightService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
