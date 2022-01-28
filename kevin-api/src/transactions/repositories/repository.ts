import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { Transaction } from '../entities/transaction.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class Repository {
  #transactions: Map<string, Transaction> = new Map();

  saveTransaction(transactionDto: CreateTransactionDto) {
    const transaction: Transaction = {
      id: uuidv4(),
      ...transactionDto,
    };
    this.#transactions.set(transaction.id, transaction);
    return transaction;
  }
}
