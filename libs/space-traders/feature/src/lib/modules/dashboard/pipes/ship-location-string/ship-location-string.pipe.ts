import { Pipe, PipeTransform } from '@angular/core';
import { Ship, ShipNavigation } from '@space-trader/shared/data-access';

@Pipe({
  name: 'shipLocationString',
})
export class ShipLocationStringPipe implements PipeTransform {
  transform(nav: ShipNavigation): string {
    let locationString = '';
    const isDocked = nav.status === 'DOCKED';
    if (isDocked) {
      locationString += 'Docked at ';
    } else {
      locationString += 'Travelling to ';
    }
    locationString += nav.waypointSymbol;
    return locationString;
  }
}
