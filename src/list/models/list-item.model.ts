import 'reflect-metadata';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { BaseModel } from '../../common/models/base.model';

@ObjectType()
export class ListItem extends BaseModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Int)
  price: number;

  @Field()
  url: string;

  @Field()
  purchased: boolean;
}
