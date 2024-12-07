import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class DeleteInput {
  @Field()
  id: string;
}
