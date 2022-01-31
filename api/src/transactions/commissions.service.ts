import { Injectable } from '@nestjs/common';
import { Repository } from './repository';
import { commissionsRules } from './commissions';

@Injectable()
export class CommissionsService {
  private HIGH_TURNOVER_DISCOUNTED_COMISSION = 0.03;
  private HIGH_TURNOVER = 1000;
  private DEFAULT_COMMISSION_MIN = 0.05;
  private DEFAULT_COMMISSION_PCT = 0.5;

  constructor(private repository: Repository) {}

  getRequiredCommission(clientId: number, amount: number, date: Date): number {
    return Math.min(
      this.#calculateDefaultCommission(amount),
      this.#calculateHighTurnoverCommission(clientId, date),
      this.#calculateRuleBasedCommission(clientId, date),
    );
  }

  #calculateHighTurnoverCommission(clientId: number, date: Date) {
    const clientsTransactions =
      this.repository.findAllClientsTransactionsForMonth(clientId, date);
    const transactionsSum = clientsTransactions.reduce<number>((prev, curr) => {
      return (prev += curr.amount);
    }, 0);

    return transactionsSum > this.HIGH_TURNOVER
      ? this.HIGH_TURNOVER_DISCOUNTED_COMISSION
      : Number.MAX_SAFE_INTEGER;
  }

  #calculateDefaultCommission(amount: number) {
    return Math.min(
      amount * (this.DEFAULT_COMMISSION_PCT / 100),
      this.DEFAULT_COMMISSION_MIN,
    );
  }

  #calculateRuleBasedCommission(clientId: number, date: Date) {
    const ruleForThisMonth = commissionsRules.find(
      (rule) =>
        rule.clientId === clientId && rule.date.getMonth() == date.getMonth(),
    );

    return ruleForThisMonth
      ? ruleForThisMonth.commissionAmount
      : Number.MAX_SAFE_INTEGER;
  }
}
