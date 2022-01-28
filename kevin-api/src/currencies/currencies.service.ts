import { Injectable } from '@nestjs/common';
import { CurrenciesHttpClient } from './currenciesHttpClient.service';

@Injectable()
export class CurrenciesService {
  constructor(private httpClient: CurrenciesHttpClient) {}

  async convertCurrency(amount: number, currency: string = 'EUR') {
    if (currency === 'EUR') {
      return amount;
    }
    const { data: currenciesRates } = await this.httpClient.getCurreciesRates();

    if (currenciesRates) {
      const rate = currenciesRates.rates[currency];

      return amount / rate;
    }
  }
}
