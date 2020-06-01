import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoaderModule } from './loader/loader.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoaderModule
  ],
  exports:[
    FormsModule,
    LoaderModule
  ]
})
export class ShareModule { }
