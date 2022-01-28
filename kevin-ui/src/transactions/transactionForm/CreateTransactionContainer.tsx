import axios from "axios";
import { useEffect } from "react";
import { CreateTransactionForm, FormValues } from ".";
import { TransactionDto } from "../types";

type CreateTransactionContainerProps = {};

export const CreateTransactionContainer = (
  props: CreateTransactionContainerProps
) => {
  const submit = (formValues: FormValues) => {
    console.log("SUBMIT");

    const transactionDto: TransactionDto = {
      date: Date.now().toString(),
      amount: `${formValues.amount}`,
      client_id: formValues.clientId,
      currency: formValues.currency,
    };

    axios.post("http://localhost:3000/transactions", transactionDto);
  };

  return (
    <div>
      <CreateTransactionForm onSubmit={submit} />
    </div>
  );
};
