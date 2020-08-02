import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultipleDropdownComponent } from './components/multiple-dropdown/multiple-dropdown.component';
import { TranslatePipe } from './pipes/translate/translate.pipe';
import {TranslateService, TRANSLATION_PROVIDERS} from "./services/translate";

@NgModule({
  declarations: [
    AppComponent,
    MultipleDropdownComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [TranslatePipe, TranslateService, TRANSLATION_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
