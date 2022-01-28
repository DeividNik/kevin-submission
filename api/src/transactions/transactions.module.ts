import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { Repository } from './repository';
import { CurrenciesService } from 'src/currencies/currencies.service';
import { DiscountsService } from './discounts.service';

@Module({
  controllers: [TransactionsController],
  providers: [
    TransactionsService,
    Repository,
    CurrenciesService,
    DiscountsService,
  ],
})
export class TransactionsModule {}
