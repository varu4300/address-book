import { Page } from './../../enum';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  pageChanged$ = new BehaviorSubject<Page>(Page.HOME);

  constructor() { }

  setPage(page: Page) {
    this.pageChanged$.next(page);
  }

  getPage() {
    return this.pageChanged$.asObservable();
  }
}

