export interface OwnerEntity {
  aId: number;
  aLastName: string;
  aFirstName: string;
  aMiddleName: string;
  aCars: CarEntity[]
}

export interface CarEntity {
  id: number;
  stateNumber: string;
  brand: string;
  model: string;
  year: string

}
