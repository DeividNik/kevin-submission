import { Injectable } from '@nestjs/common';
import { CurrenciesService } from 'src/currencies/currencies.service';
import { Currency } from 'src/currencies/enums';
import { CommissionsService } from './commissions.service';
import { CommissionResponseDto } from './dto/commission-response.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Repository } from './repository';

@Injectable()
export class TransactionsService {
  constructor(
    private repository: Repository,
    private currenciesService: CurrenciesService,
    private commisionsService: CommissionsService,
  ) {}

  async create(
    createTransactionDto: CreateTransactionDto,
  ): Promise<CommissionResponseDto> {
    const { amount, client_id, date } = createTransactionDto;
    const transactionDate = new Date(date);

    const convertedAmount = await this.currenciesService.convertToEur(
      Number(amount),
      Currency[createTransactionDto.currency],
    );

    const commission = this.commisionsService.getRequiredCommission(
      client_id,
      convertedAmount,
      transactionDate,
    );

    this.repository.saveTransaction({
      date: transactionDate,
      clientId: client_id,
      amount: convertedAmount,
      currency: Currency.EUR,
    });

    return {
      amount: `${commission}`,
      currency: Currency.EUR,
    };
  }
}

//code@kevin.eu
