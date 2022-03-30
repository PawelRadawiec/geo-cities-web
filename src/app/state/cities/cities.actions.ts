import { City } from 'src/app/common/models/city.model';

export namespace CitiesActions {
  export class GetAllRequest {
    static type = '[Cities] GetAll';

    constructor(public filters: any) {}
  }

  export class SetCities {
    static type = '[Cities] SetCities';

    constructor(public cities: City[]) {}
  }
}
