import { Injectable } from '@nestjs/common';
import { CurrenciesService } from 'src/currencies/currencies.service';
import { Currency } from 'src/currencies/enums';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { Repository } from './repository';

@Injectable()
export class TransactionsService {
  constructor(
    private repository: Repository,
    private currenciesService: CurrenciesService,
  ) {}

  async create(
    createTransactionDto: CreateTransactionDto,
  ): Promise<Transaction> {
    const convertedAmount = await this.currenciesService.convertToEur(
      Number(createTransactionDto.amount),
      Currency[createTransactionDto.currency],
    );

    return this.repository.saveTransaction({
      date: new Date(createTransactionDto.date),
      clientId: createTransactionDto.client_id,
      amount: convertedAmount,
      currency: Currency.EUR,
    });
  }
}

//code@kevin.eu
