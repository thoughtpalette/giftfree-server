import { PrismaService } from 'nestjs-prisma';
import {
  Resolver,
  Query,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { Lists } from './models/lists.model';
import { ListsService } from './lists.service';

@Resolver(() => Lists)
@UseGuards(GqlAuthGuard)
export class ListsResolver {
  constructor(
    private listSvc: ListsService,
    private prisma: PrismaService,
  ) {}

//   @Query(() => User)
//   async me(@UserEntity() user: User): Promise<User> {
//     return user;
//   }

//   @UseGuards(GqlAuthGuard)
//   @Mutation(() => User)
//   async updateUser(
//     @UserEntity() user: User,
//     @Args('data') newUserData: UpdateUserInput,
//   ) {
//     return this.usersService.updateUser(user.id, newUserData);
//   }

//   @UseGuards(GqlAuthGuard)
//   @Mutation(() => User)
//   async changePassword(
//     @UserEntity() user: User,
//     @Args('data') changePassword: ChangePasswordInput,
//   ) {
//     return this.usersService.changePassword(
//       user.id,
//       user.password,
//       changePassword,
//     );
//   }
}
