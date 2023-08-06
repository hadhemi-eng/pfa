import { ObjectType, Field } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import bcrypt from 'bcrypt';

@ObjectType()
@Schema()
export class User {
  @Field(() => String)
  @Prop()
  firstname: string;

  @Field(() => String)
  @Prop()
  lastname: string;

  @Field(() => String)
  @Prop()
  password: string;

  @Field(() => String)
  @Prop()
  phone: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  this.password = bcrypt.hashSync(this.password, 10);
  next();
});
