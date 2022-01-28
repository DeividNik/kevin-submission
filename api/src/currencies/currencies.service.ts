import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CurreciesRatesResponseDto } from './dto/currencies-rates-response.dto';
import { Currency } from './enums';

@Injectable()
export class CurrenciesService {
  async convertToEur(amount: number, currentCurrency: Currency) {
    if (currentCurrency === Currency.EUR) {
      return amount;
    }
    const { data: currenciesRates } =
      await axios.get<CurreciesRatesResponseDto>(
        'https://api.exchangerate.host/2021-01-01',
      );

    if (currenciesRates) {
      const rate = currenciesRates.rates[currentCurrency];

      return amount / rate;
    }
  }
}
