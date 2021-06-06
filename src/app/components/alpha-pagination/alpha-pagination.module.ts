import { FilterModule } from './../../pipes/filter/filter.module';
import { FilterPipe } from 'src/app/pipes/filter/filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphaPaginationComponent } from './alpha-pagination.component';

@NgModule({
  declarations: [
    AlphaPaginationComponent,
  ],
  imports: [ CommonModule, FilterModule ],
  exports: [
    AlphaPaginationComponent
  ],
  providers: [],
})
export class AlphaPaginationModule {}
