import { IUser } from './../../models/user';
import { map, takeUntil } from 'rxjs/operators';
import { SharedService } from './../../services/shared/shared.service';
import { UserService } from './../../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/classes/user';
import { Response } from '../../classes/response';
import { Page } from 'src/app/enum';
@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  user: User | null = null;

  constructor(private _router: Router, private _route: ActivatedRoute, private _userService: UserService, private _sharedService: SharedService) { }

  ngOnInit(): void {
    this._sharedService.setPage(Page.DETAILS)

    // Listen to route parameter changes
    this._route.params
    .pipe(takeUntil(this.destroy$))
    .subscribe(params => {
      const id = params.id;
      this._userService.getContacts()
      .then(response => {
        // create list of object users
        const users = response.map(g => new User(g.name, g.email, g.picture, g.phone, g.login));

        // Get the corresponding user from the url parameter id
        const user = this.getUser(users, id);

        // If no user found redirect to 404
        if (!user) this.redirectTo404();

        this.user = user;
      })
    })
  }

  // Redirect's user to 404 page
  redirectTo404() {
    this._router.navigate(['/404']);
  }

  getUser(users: User[], id:string) {
    const user = users.find(g => g.login.username === id);

    if (!user) return null;

    return new User(user.name, user.email, user.picture, user.phone, user.login);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.destroy$.unsubscribe();
  }

}
