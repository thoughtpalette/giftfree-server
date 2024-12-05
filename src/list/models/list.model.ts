import 'reflect-metadata';
import {
  ObjectType,
  Field,
} from '@nestjs/graphql';
import { BaseModel } from '../../common/models/base.model';

@ObjectType()
export class List extends BaseModel {
  @Field()
  id: string;

  @Field()
  name: string;
}
