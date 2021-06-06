import { FilterPipe } from 'src/app/pipes/filter/filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FilterPipe
  ],
  imports: [ CommonModule ],
  exports: [
    FilterPipe
  ],
  providers: [],
})
export class FilterModule {}
