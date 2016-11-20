import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { MdInputInlineComponent } from
'./md-input-inline/md-input-inline.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    MdInputInlineComponent,
  ],
  exports: [
    MdInputInlineComponent
  ]
})
export class MdInputInlineModule { }
