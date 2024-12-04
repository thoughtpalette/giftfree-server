import { Field, Int, ObjectType } from '@nestjs/graphql';
import { DateTime } from 'graphql-scalars/typings/mocks';
import { ListItem } from './list-item.model';

@ObjectType()
export class Lists {
  @Field(type => Int)
  id: number;

  @Field(type => DateTime)
  createdAt: Date

  @Field(type => DateTime)
  updatedAt: Date

  @Field()
  name: string

  @Field(type => [ListItem])
  items: ListItem[]
}