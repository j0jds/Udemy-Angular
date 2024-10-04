import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { UsersService } from '../service/users.service';

@Directive({
  selector: '[appUserNameValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UserNameValidatorDirective),
      multi: true,
    },
  ],
})

export class UserNameValidatorDirective implements AsyncValidator {
  constructor(private readonly _usersService: UsersService) {}

  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this._usersService.getUsers().pipe(
      map((users) => {
        const foundUser = users.find((user) => user.name === control.value);

        if (foundUser) {
          return null;
        }
        return { invalidUserName: 'true' };
      })
    );
  }
}