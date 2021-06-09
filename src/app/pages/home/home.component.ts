import {  ActivatedRoute } from '@angular/router';
import { Page, ListRole } from './../../enum';
import { SharedService } from './../../services/shared/shared.service';
import { Component, OnInit, OnDestroy, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { UserService } from './../../services/user/user.service';
import { Subject } from 'rxjs';
import { User } from 'src/app/classes/user';
import { Helper } from '../../helper';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChildren('alphaHeaders') alphaHeaders: QueryList<ElementRef> = new QueryList<ElementRef>();
  destroy$ = new Subject();
  users: User[] = []
  chars: string[] = [];
  ListRole = ListRole;
  constructor(
    private _route: ActivatedRoute,
    private _sharedService: SharedService,
    private _userService: UserService) { }

  ngOnInit(): void {
    // Set current active page
    this._sharedService.setPage(Page.HOME)

    // Create list of characters from A to Z
    this.chars = Helper.generateAlphabet();

    // Initiate the getContacts method, to retrieve random users
    this.getContacts();

    // Check for fragment update
    this._route.fragment
    .pipe(takeUntil(this.destroy$))
    .subscribe(fragment => {
      const div = `#${fragment}`;
      const el = this.alphaHeaders.find(g => g.nativeElement.id === div);

      if(!el) return;

      el.nativeElement.scrollIntoView({behavior: 'smooth'})
    })

  }
  // Get all the contacts from the random user api
  getContacts() {
    this._userService.getContacts()
    .then(data => {

      // Function to sort incoming users by last name
      const sortByName = (a: User, b: User): number => {
        if (a.name.last < b.name.last) return -1;
        if (a.name.last > b.name.last ) return 1
        return 0;
      }
      if (!data) return;

      // If results then sort the users by last name and update users
      this.users = data.sort(sortByName);
    })
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }

}
