import { Module } from '@nestjs/common';
import { ListsResolver } from './lists.resolver';
import { ListsService } from './lists.service';

@Module({
  imports: [],
  providers: [ListsResolver, ListsService],
})
export class ListsModule {}
