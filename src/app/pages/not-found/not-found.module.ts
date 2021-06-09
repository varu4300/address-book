import { SharedService } from '../../services/shared/shared.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [ NotFoundComponent ],
  imports: [ CommonModule ],
  exports: [
    NotFoundComponent
  ],
  providers: [
    SharedService
  ],
})
export class NotFoundModule {}
