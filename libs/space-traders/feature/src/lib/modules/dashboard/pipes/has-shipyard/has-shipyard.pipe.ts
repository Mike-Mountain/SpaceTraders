import { Pipe, PipeTransform } from '@angular/core';
import {SystemWaypointTrait} from "@space-trader/shared/data-access";

@Pipe({
  name: 'hasShipyard'
})
export class HasShipyardPipe implements PipeTransform {

  transform(traits: SystemWaypointTrait[] | undefined): boolean {
    if (!traits) {
      return false;
    }
    const traitSymbols = traits.map(trait => trait.symbol);
    return traitSymbols.includes('SHIPYARD');
  }

}
