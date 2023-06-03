import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contractExpired'
})
export class ContractExpiredPipe implements PipeTransform {

  transform(expiration: Date): boolean {
    const today = new Date();
    const expires = new Date(expiration);
    return today.getTime() > expires.getTime();
  }

}
