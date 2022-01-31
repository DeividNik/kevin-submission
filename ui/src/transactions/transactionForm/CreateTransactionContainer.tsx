import axios from "axios";
import { CreateTransactionForm, FormValues } from ".";
import { TransactionDto } from "../types";

type CreateTransactionContainerProps = {};

export const CreateTransactionContainer = (
  props: CreateTransactionContainerProps
) => {
  const submit = (formValues: FormValues) => {
    const transactionDto: TransactionDto = {
      date: new Date().toISOString(),
      amount: `${formValues.amount}`,
      client_id: formValues.clientId,
      currency: formValues.currency,
    };

    axios.post("http://localhost:3001/transactions", transactionDto);
  };

  return (
    <div>
      <CreateTransactionForm onSubmit={submit} />
    </div>
  );
};
