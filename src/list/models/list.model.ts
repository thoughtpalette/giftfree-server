import 'reflect-metadata';
import {
  ObjectType,
  Field,
  ID,
} from '@nestjs/graphql';
import { BaseModel } from '../../common/models/base.model';
import { ListItem } from './list-item.model';

@ObjectType()
export class List extends BaseModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [ListItem])
  items: ListItem[]
}
