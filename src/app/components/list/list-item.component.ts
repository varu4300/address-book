import { Router } from '@angular/router';
import { ListRole } from './../../enum';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-list-item',
  template: `
    <div *ngIf="role === ListRole.ITEM" class="list-item"><ng-content></ng-content></div>
    <a *ngIf="role === ListRole.LINK" [routerLink]="[href]"  class="list-item link"><ng-content></ng-content></a>
  `,
  styleUrls: ['./list.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() role: ListRole = ListRole.ITEM
  @Input() href: string = '';
  @Input() user: User = {} as User;
  ListRole = ListRole;


  constructor(private _router: Router) {}

  ngOnInit() {}

}


