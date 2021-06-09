import { Injectable } from '@angular/core';
import { API_SEED } from './../../app-constants';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/classes/user';
import { Response } from 'src/app/classes/response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient: HttpClient) { }


  getContacts(): Promise<User[]> {
    return new Promise((resolve, reject) => {
        this._httpClient.get<Response<User[]>>(`${environment.randomUserApiUrl}?results=25&nat=ca&inc=gender,name,email,id,picture,login,phone,mobile&seed=${API_SEED}`).toPromise()
        .then(data => resolve(data.results))
        .catch(error => reject(error))
    })
  }
}
