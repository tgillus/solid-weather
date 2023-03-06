import { Http } from '../../vendor/http/http';

export class GeoGateway {
  constructor(private readonly http: Http, private readonly api: string) {}

  async locationByZip(zip: string) {
    return await this.http.get<GeoLocationResponse>(`${this.api}/v1/location`, {
      searchParams: {
        zip,
      },
    });
  }

  static build() {
    return new GeoGateway(new Http(), 'http://localhost:4000');
  }
}

interface GeoLocationResponse {
  addresses: Address[];
}

interface Address {
  formattedAddress: string;
  latitude: number;
  longtitude: number;
}
