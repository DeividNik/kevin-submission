import * as csv from 'csv-parser';
import * as fs from 'fs';

export type Rule = {
  clientId: number;
  amount: number;
  date: Date;
  currency: string;
  commissionAmount: number;
  commissionCurrency: string;
};

export const commissionsRules: Rule[] = [];

fs.createReadStream('src/transactions/discounts.csv')
  .pipe(csv())
  .on('data', (data) =>
    commissionsRules.push({
      amount: Number(data.amount),
      clientId: Number(data.client_id),
      date: new Date(data.date),
      currency: data.currency,
      commissionAmount: Number(data.commission_amount),
      commissionCurrency: data.commission_currency,
    }),
  )
  .on('end', () => {});
