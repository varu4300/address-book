import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [ CommonModule, RouterModule.forRoot([]), ],
  exports: [],
  providers: [],
})
export class DetailsModule {}
