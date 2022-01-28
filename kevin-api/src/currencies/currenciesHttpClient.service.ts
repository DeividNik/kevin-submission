import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CurreciesRatesResponse } from './types';

@Injectable()
export class CurrenciesHttpClient {
  async getCurreciesRates() {
    return await axios.get<CurreciesRatesResponse>(
      'https://api.exchangerate.host/2021-01-01',
    );
  }
}
