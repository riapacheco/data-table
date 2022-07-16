import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';
import { FilterAllPipe } from './pipes/filter-all.pipe';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    FilterAllPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ScrollingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
