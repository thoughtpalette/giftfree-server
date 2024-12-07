import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { AddItemInput } from './dto/add-item-input';
import { AddListInput } from './dto/add-list-input';

@Injectable()
export class ListService {
  constructor(private prisma: PrismaService) {}

  async getLists(userId: string) {
    return await this.prisma.list.findMany({
      where: {
        author: {
          id: userId,
        },
      },
      include: {
        items: true,
        author: true,
      }
    });
  }

  async getList(listId: string) {
    return await this.prisma.list.findUnique({
      where: {
        id: listId,
      },
      include: {
        items: true,
        author: true
      },
    });
  }

  async addItem(addItemData: AddItemInput) {
    return await this.prisma.listItem.create({
      data: addItemData,
    });
  }

  async addList(addListData: AddListInput) {
    return await this.prisma.list.create({
      data: addListData,
    });
  }

  async deleteItem(id: string, listId) {
    await this.prisma.listItem.delete({
      where: {
        id,
      }
    })

    return this.getList(listId)
  }
}
