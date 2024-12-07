import { InputType, Field } from '@nestjs/graphql';
import { List } from '../models/list.model';

@InputType()
export class AddItemInput {
  @Field()
  name: string;

  @Field()
  url: string;

  @Field()
  purchased: boolean;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  notes?: string;

  @Field()
  listId: string;
}