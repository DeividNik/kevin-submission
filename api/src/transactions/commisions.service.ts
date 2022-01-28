import { Injectable } from '@nestjs/common';
import { Repository } from './repository';
import { commissionsRules } from './commisions';

@Injectable()
export class DiscountsService {
  private HIGH_TURNOVER_DISCOUNTED_COMISSION = 0.03;
  private HIGH_TURNOVER = 1000;
  private DEFAULT_COMMISSION_MIN = 0.05;

  constructor(private repository: Repository) {}

  applyDiscount(clientId: number, amount: number, date: Date): number {
    const clientsTransactions =
      this.repository.findAllClientsTransactionsForMonth(clientId, date);

    const transactionsSum = clientsTransactions.reduce<number>((prev, curr) => {
      return (prev += curr.amount);
    }, 0);

    if (transactionsSum > 1000) {
      return amount + this.HIGH_TURNOVER_DISCOUNTED_COMISSION;
    }

    return amount;
  }
}
