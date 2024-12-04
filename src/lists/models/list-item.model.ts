import { Field, Int, ObjectType } from '@nestjs/graphql';
import { DateTime } from 'graphql-scalars/typings/mocks';

@ObjectType()
export class ListItem {
  @Field(type => Int)
  id: number;

  @Field(type => DateTime)
  createdAt: Date

  @Field(type => DateTime)
  updatedAt: Date

  @Field()
  name: string

  @Field(type => Int)
  price?: number;

  @Field()
  url: string

  @Field()
  purchased: boolean
}