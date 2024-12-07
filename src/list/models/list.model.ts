import 'reflect-metadata';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { BaseModel } from '../../common/models/base.model';
import { ListItem } from './list-item.model';
import { User } from '../../users/models/user.model';

@ObjectType()
export class List extends BaseModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => User, { nullable: true })
  author?: User

  @Field()
  authorId: string

  @Field(() => [ListItem])
  items: ListItem[];

  @Field(() => Date, { nullable: true })
  eventDate?: Date
}
