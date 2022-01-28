import { Injectable } from '@nestjs/common';
import { CurrenciesHttpClient } from './currenciesHttpClient.service';
import { Currency } from './enums';

@Injectable()
export class CurrenciesService {
  constructor(private httpClient: CurrenciesHttpClient) {}

  async convertToEur(amount: number, currentCurrency: Currency) {
    if (currentCurrency === Currency.EUR) {
      return amount;
    }
    const { data: currenciesRates } = await this.httpClient.getCurreciesRates();

    if (currenciesRates) {
      const rate = currenciesRates.rates[currentCurrency];

      return amount / rate;
    }
  }
}
