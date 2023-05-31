import { inject } from '@angular/core';
import { UserState } from '../state';
import { map, Observable, of, switchMap } from 'rxjs';
import { User } from '../models';
import { Router } from '@angular/router';
import { UserService } from '../services';

export const authGuard = (): Observable<boolean> => {
  const userState = inject(UserState);
  const userService = inject(UserService);
  const router = inject(Router);
  let user$: Observable<User>;
  if (!userState.getToken()) {
    const token = localStorage.getItem('token');
    if (token) {
      userState.setUserDetails({ token });
    } else {
      router.navigate(['/']);
      throw new Error('Token not set, please log in!');
    }
  }
  if (userState.getHasCache()) {
    user$ = userState.getUserDetails();
  } else {
    user$ = userService.combineUserDetails(userState.getToken());
  }

  return user$.pipe(
    switchMap((user) => {
      return user.token ? of(true) : of(false);
    })
  );
};
