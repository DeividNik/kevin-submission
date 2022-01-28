import { Injectable } from '@nestjs/common';
import { Transaction } from './entities/transaction.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class Repository {
  // In real life scenario transactions would be stored in DB
  #transactions: Transaction[];

  constructor() {
    this.#transactions = [];
  }

  saveTransaction(transaction: Omit<Transaction, 'id'>) {
    const trans: Transaction = {
      id: uuidv4(),
      ...transaction,
    };
    this.#transactions.push(trans);
    return trans;
  }

  findAllClientsTransactionsForMonth(clientId: number, month: Date) {
    return this.#transactions.filter(
      (trans) =>
        trans.clientId === clientId &&
        trans.date.getMonth() === month.getMonth(),
    );
  }
}
