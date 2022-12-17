import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChargementService implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    // Vérifier si la route doit être préchargée
    if (route.data && route.data['preload']) {
      // Précharger la route
      return load();
    } else {
      // Ne pas précharger la route
      return of(null);
    }
  }
}
