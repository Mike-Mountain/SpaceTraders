import { Pipe, PipeTransform } from '@angular/core';
import { PlanetTypes } from '@space-trader/shared/data-access';

@Pipe({
  name: 'getPlanetImage',
  standalone: true,
})
export class GetPlanetImagePipe implements PipeTransform {
  transform(planetType: PlanetTypes): string {
    let idx: number;
    let planets: string[];
    switch (planetType) {
      case PlanetTypes.ASTEROID:
        return 'assets/planets/Asteroid.png';
      case PlanetTypes.PLANET:
        idx = Math.floor(Math.random() * 2);
        planets = ['WetPlanet.png', 'DryPlanet.png'];
        return `assets/planets/${planets[idx]}`;
      case PlanetTypes.MOON:
        return 'assets/planets/Moon.png';
      case PlanetTypes.GATE:
        return 'assets/planets/JumpGate.png';
      case PlanetTypes.STATION:
        return 'assets/planets/OrbitalStation.png';
      case PlanetTypes.BLUE_STAR:
        return 'assets/suns/BlueStar.png';
      case PlanetTypes.RED_STAR:
        return 'assets/suns/RedStar.png';
      case PlanetTypes.ORANGE_STAR:
        return 'assets/suns/OrangeStar.png';
      case PlanetTypes.GAS:
        return 'assets/suns/GasGiant.png';
      case PlanetTypes.YOUNG_STAR:
        return 'assets/suns/YoungStar.png';
      case PlanetTypes.NEUTRON:
        return 'assets/suns/NeutronStar.png';
      case PlanetTypes.WHITE_DWARF:
        return 'assets/suns/WhiteDwarf.png';
      case PlanetTypes.BLACK_HOLE:
        return 'assets/suns/BlackHole.png';
      default:
        return 'assets/planets/WetPlanet.png';
    }
  }
}
