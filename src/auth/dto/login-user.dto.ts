import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginUser {
  @Field(() => String, { description: 'email of the user' })
  email: string;
  @Field(() => String, { description: 'password of the user' })
  password: string;
}
