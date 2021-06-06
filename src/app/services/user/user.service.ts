import { Injectable } from '@angular/core';
import { API_SEED } from './../../app-constants';
import { environment } from './../../../environments/environment';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/classes/user';
import { Response } from 'src/app/models/response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  $userSubject$ = new BehaviorSubject<User>({} as U);

  constructor(private _httpClient: HttpClient) { }


  getContacts(): Observable<Response<User[]>> {
    const subject = new Subject<Response<User[]>>()
    this._httpClient.get<Response<User[]>>(`${environment.randomUserApiUrl}?results=25&nat=ca&inc=gender,name,email,id,picture&seed=${API_SEED}`).toPromise()
    .then(data => {
      subject.next(data);
    })
    .catch(error => {
      subject.next(error);
    })

    return subject.asObservable();
  }

  getContact(id: string): Observable<User> {

  }
}
