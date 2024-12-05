import { PrismaService } from 'nestjs-prisma';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { ListService } from './list.service';
import { List } from './models/list.model';

@Resolver(() => List)
export class ListResolver {
  constructor(
    private listService: ListService,
    private prisma: PrismaService,
  ) {}

  @Query(() => [List])
  async getLists(@Args('id') id: string): Promise<List[]> {
    return this.listService.getListsById(id)
  }
}
