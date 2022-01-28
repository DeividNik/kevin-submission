import { Controller, Get, Post, Body } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { DiscountsService } from './discounts.service';

@Controller('transactions')
export class TransactionsController {
  constructor(
    private readonly transactionsService: TransactionsService,
    private readonly discountService: DiscountsService,
  ) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return 'this.transactionsService.create(createTransactionDto)';
  }

  @Get()
  findAll() {
    return 'this.transactionsService.findAll()';
  }
}
