import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AddListInput {
  @Field()
  name: string;

  @Field(() => Date, { nullable: true })
  eventDate?: Date

  @Field({ nullable: true })
  description?: string;

  @Field()
  authorId: string
}
