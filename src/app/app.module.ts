import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { TemplatesComponent } from './templates/templates.component';
import { FormatPipe} from './format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    PipesComponent,
    TemplatesComponent,
    FormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
