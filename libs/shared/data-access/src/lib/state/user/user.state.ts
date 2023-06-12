import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, take} from 'rxjs';
import { User } from '../../models';
import { HttpClient } from '@angular/common/http';
import { EndpointService } from '../../services';

@Injectable({
  providedIn: 'root',
})
export class UserState {
  private _userSrc = new BehaviorSubject<User>({} as User);

  constructor(
    private http: HttpClient,
    private endpointService: EndpointService
  ) {}

  setUserDetails(details: Partial<User>) {
    let user = this._userSrc.value;
    user = { ...user, ...details };
    this._userSrc.next(user);
  }

  getUserDetails(): Observable<User> {
    return this._userSrc.asObservable().pipe(take(1));
  }

  getToken(): string {
    return this._userSrc.value.token;
  }

  getHasCache(): boolean {
    return !!(this._userSrc.value.token && this._userSrc.value.agent);
  }
}
