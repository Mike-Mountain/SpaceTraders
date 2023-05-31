import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserState {
  private _userSrc = new BehaviorSubject<User>({} as User);

  constructor() {}

  setUserDetails(details: Partial<User>) {
    let user = this._userSrc.value;
    user = { ...user, ...details };
    this._userSrc.next(user);
  }

  getUserDetails() {
    return this._userSrc.asObservable();
  }
}
