import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item.component';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent
  ],
  imports: [ CommonModule, RouterModule ],
  exports: [
    ListComponent,
    ListItemComponent
  ],
  providers: [],
})
export class ListModule {}
