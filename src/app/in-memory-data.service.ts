import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {OwnerEntity} from "./model/owner.interface";


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const owners = [
      { aId: 1, aLastName: 'Dr Nice', aFirstName: 'Marco', aMiddleName: 'Bombasto',
        aCars: [
          {id: 111, stateNumber: 'AA1234CB',brand: 'Peugeot', model: '2008', year: 2019},
          {id: 112, stateNumber: 'AA1254CB', brand: 'Peugeot', model: '5008', year: 2011}
          ]
      },
      { aId: 2, aLastName: 'Celeritas', aFirstName: 'Magneta', aMiddleName: 'Dynama',
        aCars: [
          {id: 121, stateNumber: 'KA7734CB', brand: 'Peugeot', model: '2008', year: 2018},
          {id: 122, stateNumber: 'AB1234CB', brand: 'Chevrolet', model: 'Aveo', year: 2002}
          ]
      },
      { aId: 3, aLastName: 'Dr IQ', aFirstName: 'Magma', aMiddleName: 'Tornado',
        aCars: [
          {id: 131, stateNumber: 'AP1288CB', brand: 'Renault', model: 'Kangoo', year: 2015},
          {id: 132, stateNumber: 'BA1294CB', brand: 'Toyota', model: 'Camry', year: 2013}
          ]
      },
      { aId: 4, aLastName:  'RubberMan', aFirstName: 'Marco', aMiddleName: 'Bombasto',
        aCars: [
          {id: 141, stateNumber: 'BA1234KB',  brand: 'Renault', model: 'Kangoo', year: 2011},
          {id: 142, stateNumber: 'AA1234BB', brand: 'Peugeot', model: '2008', year: 2019}
          ]
      },
      { aId: 5, aLastName: 'Bombasto', aFirstName: 'Narco', aMiddleName: 'Magma', aCars:
          [{id: 151, stateNumber: 'AA0001CB', brand: 'Audi', model: 'A5', year: 2009}] }
    ];
    return {owners};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(owners: OwnerEntity[]): number {
    return owners.length > 0 ? Math.max(...owners.map(owner => owner.aId)) + 1 : 1;
  }
}
