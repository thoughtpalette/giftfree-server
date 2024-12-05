import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListService {
  constructor(
    private prisma: PrismaService,
  ) {
  }

  async getListsById(id: string) {
    return await this.prisma.list.findMany({
        where: {
            author: {
                id,
            },
        },
        include: {
            items: true
        }
    })
  }
}
