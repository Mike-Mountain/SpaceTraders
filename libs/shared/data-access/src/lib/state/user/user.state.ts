import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserState {
  private _userSrc = new BehaviorSubject<any>({});

  constructor() {}

  setUserDetails(details: any) {
    this._userSrc.next(details);
  }

  getUserDetails() {
    return this._userSrc.asObservable();
  }
}
