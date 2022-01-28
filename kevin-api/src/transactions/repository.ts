import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class Repository {
  // In real life scenario transactions would be stored in DB
  #transactions: Map<string, Transaction> = new Map();

  saveTransaction(transaction: Omit<Transaction, 'id'>) {
    const trans: Transaction = {
      id: uuidv4(),
      ...transaction,
    };
    this.#transactions.set(trans.id, trans);
    return trans;
  }
}
