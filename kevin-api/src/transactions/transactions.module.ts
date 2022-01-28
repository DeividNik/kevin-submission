import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { Repository } from './repository';
import { CurrenciesService } from 'src/currencies/currencies.service';
import { CurrenciesHttpClient } from 'src/currencies/currenciesHttpClient.service';

@Module({
  controllers: [TransactionsController],
  providers: [
    TransactionsService,
    Repository,
    CurrenciesService,
    CurrenciesHttpClient,
  ],
})
export class TransactionsModule {}
