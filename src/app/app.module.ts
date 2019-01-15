import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteinfoComponent } from './quoteinfo/quoteinfo.component';
import { DatePipe } from './date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteinfoComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
