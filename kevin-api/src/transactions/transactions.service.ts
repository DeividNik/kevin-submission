import { Injectable } from '@nestjs/common';
import { CurrenciesService } from 'src/currencies/currencies.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { Repository } from './repositories/repository';

@Injectable()
export class TransactionsService {
  constructor(
    private repository: Repository,
    private currenciesService: CurrenciesService,
  ) {}

  async create(
    createTransactionDto: CreateTransactionDto,
  ): Promise<Transaction> {
    const convertedAmount = await this.currenciesService.convertCurrency(
      Number(createTransactionDto.amount),
      createTransactionDto.currency,
    );

    return this.repository.saveTransaction({
      ...createTransactionDto,
      amount: `${convertedAmount}`,
    });
  }
}

//code@kevin.eu
