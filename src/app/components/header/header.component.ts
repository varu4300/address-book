import { takeUntil, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SharedService } from './../../services/shared/shared.service';
import { Page } from './../../enum';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  Page = Page;
  page: Page = Page.HOME;
  destroy$ = new Subject();
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getPage()
    .pipe(
      takeUntil(this.destroy$),
    )
    .subscribe((page: Page) => {
      this.page = page;
    })

  }

  ngOnDestroy() {
    this.destroy$.unsubscribe();
  }

}
