import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';
import { Page } from '../../enum';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.setPage(Page.NOT_FOUND);
  }


}
