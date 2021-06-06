import { FilterModule } from './../../pipes/filter/filter.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedService } from 'src/app/services/shared/shared.service';
import { HttpClientModule } from '@angular/common/http';
import { ListModule } from '../../components/list/list.module';
import { AlphaPaginationModule } from 'src/app/components/alpha-pagination/alpha-pagination.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ListModule,
    AlphaPaginationModule,
    FilterModule
  ],
  exports: [
  ],
  providers: [
    SharedService,
  ],
})
export class HomeModule {}
