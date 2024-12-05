import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';

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
      },
    });
  }

  async getList(listId: string) {
    return await this.prisma.list.findUnique({
      where: {
        id: listId,
      },
      include: {
        items: true,
      },
    });
  }
}
