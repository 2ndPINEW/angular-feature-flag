import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureFlagModule } from './feature-flag/feature-flag.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureFlagModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
