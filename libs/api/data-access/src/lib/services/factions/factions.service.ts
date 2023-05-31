import {Injectable} from '@angular/core';
import {EndpointService} from '@space-trader/shared/data-access';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class FactionsService {

  private factions = new BehaviorSubject<any[]>([]);

  constructor(
    private endpointService: EndpointService,
    private http: HttpClient
  ) {
  }

  getAllFactions() {
    if (this.factions.value.length > 0) {
      return this.factions.asObservable();
    } else {
      const url = `${this.endpointService.endpoints.gameApiUrl}/${this.endpointService.endpoints.factions}?limit=20`;
      return this.http.get(url).pipe(
        map((factions: any) => factions.data),
        tap((factions: any) => this.factions.next(factions))
      );
    }
  }
}
