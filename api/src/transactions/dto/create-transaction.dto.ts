import {
  IsDateString,
  IsDefined,
  IsEnum,
  IsNumber,
  IsNumberString,
} from 'class-validator';
import { Currency } from 'src/currencies/enums';

export class CreateTransactionDto {
  @IsDefined()
  @IsDateString()
  date: string;

  @IsDefined()
  @IsNumberString()
  amount: string;

  @IsDefined()
  @IsEnum(Currency)
  currency: string;

  @IsDefined()
  @IsNumberString()
  client_id: number;
}
