import React, { useState } from "react";

type CreateTransactionFormProps = {
  onSubmit: (formValues: FormValues) => void;
};

export type FormValues = {
  clientId: number;
  amount: number;
  currency: string;
};

export const CreateTransactionForm = ({
  onSubmit,
}: CreateTransactionFormProps) => {
  const [formValues, setFormValues] = useState({
    clientId: 0,
    amount: 0,
    currency: "",
  });

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          onSubmit(formValues);
          e.preventDefault();
        }}
      >
        <label>Client ID</label>
        <input
          type="number"
          id="clientId"
          name="clientId"
          value={formValues.clientId}
          onChange={onValueChange}
        />

        <label>Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Enter amount.."
          value={formValues.amount}
          onChange={onValueChange}
        />

        <label>Currency</label>
        <select id="currency" name="currency" onChange={onSelectChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
