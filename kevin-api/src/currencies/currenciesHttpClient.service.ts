import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CurreciesRatesReponse } from './types';

@Injectable()
export class CurrenciesHttpClient {
  async getCurreciesRates() {
    return await axios.get<CurreciesRatesReponse>(
      'https://api.exchangerate.host/2021-01-01',
    );
  }
}
