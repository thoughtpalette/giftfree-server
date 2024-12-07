import { PrismaService } from 'nestjs-prisma';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ListService } from './list.service';
import { List } from './models/list.model';
import { AddItemInput } from './dto/add-item-input';
import { ListItem } from './models/list-item.model';
import { AddListInput } from './dto/add-list-input';

@Resolver(() => List)
export class ListResolver {
  constructor(
    private listService: ListService,
    private prisma: PrismaService,
  ) {}

  @Query(() => [List])
  async getLists(@Args('userId') userId: string): Promise<List[]> {
    return this.listService.getLists(userId);
  }

  @Query(() => List)
  async getList(@Args('listId') listId: string): Promise<List> {
    return this.listService.getList(listId);
  }

  @Mutation(() => ListItem)
  async addItem(@Args('data') addItemData: AddItemInput) {
    return this.listService.addItem(addItemData);
  }

  @Mutation(() => List)
  async addList(@Args('data') addListData: AddListInput) {
    return this.listService.addList(addListData)
  }

  @Mutation(() => List)
  async deleteItem(@Args('id') id: string, @Args('listId') listId: string) {
    return this.listService.deleteItem(id, listId)
  }
}
