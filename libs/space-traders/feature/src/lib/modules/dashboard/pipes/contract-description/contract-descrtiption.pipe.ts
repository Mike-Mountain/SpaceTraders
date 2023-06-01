import { Pipe, PipeTransform } from '@angular/core';
import { Contract } from '@space-trader/shared/data-access';

@Pipe({
  name: 'contractDescription',
})
export class ContractDescriptionPipe implements PipeTransform {
  transform(contract: Contract): string {
    let contractString = '';
    if (contract.type === 'PROCUREMENT') {
      contractString += 'Deliver ';
    }
    contractString += contract.terms.deliver[0].tradeSymbol;
    contractString += ' to ';
    contractString += contract.terms.deliver[0].destinationSymbol;

    return contractString;
  }
}
