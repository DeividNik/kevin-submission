import { Module } from '@nestjs/common';
import { CurrenciesService } from './currencies.service';
import { CurrenciesHttpClient } from './currenciesHttpClient.service';

@Module({
  providers: [CurrenciesService, CurrenciesHttpClient],
})
export class CurrenciesModule {}
