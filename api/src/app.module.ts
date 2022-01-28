import { Module } from '@nestjs/common';
import { TransactionsModule } from './transactions/transactions.module';
import { CurrenciesModule } from './currencies/currencies.module';

@Module({
  imports: [TransactionsModule, CurrenciesModule],
})
export class AppModule {}
