import { CitiesFilters } from 'src/app/common/models/cities-filters.model';
import { City } from 'src/app/common/models/city.model';

export namespace CitiesActions {
  export class GetAllRequest {
    static readonly type = '[Cities] GetAll';

    constructor(public filters: any) {}
  }

  export class SetCities {
    static readonly type = '[Cities] SetCities';

    constructor(public cities: City[]) {}
  }

  export class GetDetailsRequest {
    static readonly type = '[Cities] GetDetailsRequest';

    constructor(public id: number) {}
  }

  export class GetDetailsResponse {
    static readonly type = '[Cities] GetDetailsResponse';

    constructor(public city: any) {}
  }
}
